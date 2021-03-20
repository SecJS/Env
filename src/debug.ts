import { debug, Debugger as IDebug } from 'debug'

class Debug {
  private debug: IDebug = debug('api:enviroment')

  log(message: any) {
    this.debug(message)
  }
}

export default new Debug()
