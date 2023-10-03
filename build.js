const fs = require("fs");
const esbuild = require("esbuild");

const outputDir = "dist";
if (fs.existsSync(outputDir)) {
  fs.rmdirSync(outputDir, { recursive: true });
}
const isWatchMode = process.argv
  .slice(2)
  .some((arg) => ["-w", "--watch"].includes(arg));
console.info("isWatchMode", isWatchMode);
if (isWatchMode) {
  esbuild
    .build({
      entryPoints: ["src/index.ts"],
      bundle: true,
      platform: "node",
      target: ["node14"],
      outfile: outputDir + "/index.js",
      watch: {
        onRebuild(error, result) {
          if (error) console.error("watch build failed:", error);
          else console.log("watch build succeeded:", result);
        },
      },
    })
    .then((result) => {
      console.info(result, "watching...");
    });
} else {
  const result = esbuild.buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    target: ["node14"],
    outfile: outputDir + "/index.js",
  });
  console.info("result:", result);
}
