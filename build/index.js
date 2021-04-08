'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const debug_1 = __importDefault(require('./debug'))
function Env(name, defaultValue) {
  const enviroment = process.env[`${name}`]
  if (enviroment) return enviroment
  else debug_1.default.log(`Variable ${name} not found`)
  return defaultValue
}
exports.default = Env
console.log(Env('PORT', '1234'))
