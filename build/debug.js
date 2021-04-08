'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const debug_1 = require('debug')
class Debug {
  constructor() {
    this.debug = debug_1.debug('api:enviroment')
  }

  log(message) {
    this.debug(message)
  }
}
exports.default = new Debug()
