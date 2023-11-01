import os from 'os'
import { hello } from './hello'

const cpus = os.cpus()
console.log(hello(`my cpu core count is: ${cpus.length}`))
