import * as path from 'path'
import * as dotenv from 'dotenv'

import logger from './logger'

class SetEnv {
  constructor() {
    const environment = process.env.NODE_ENV
    const configurations = { path: path.resolve(process.cwd(), '.env') }

    if (environment) {
      configurations.path = path.resolve(process.cwd(), `.env.${environment}`)

      logger.debug(`Environment variables set using .env.${environment}`)
    }

    const result = dotenv.config(configurations)

    if (result.error) {
      logger.debug('Any environment variable file found!')
    }
  }
}

export default new SetEnv()
