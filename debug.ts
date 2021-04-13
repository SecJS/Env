import { debug, Debugger as IDebug } from 'debug'

class Debug {
  private debug: IDebug = debug('api:environment')

  log(message: any) {
    this.debug(message)
  }
}

export default new Debug()
