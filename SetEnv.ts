import * as path from 'path'
import * as dotenv from 'dotenv'

import { Debug } from '@secjs/logger'

class SetEnv {
  constructor() {
    console.log(__dirname, process.cwd())
    const environment = process.env.NODE_ENV
    const configurations = { path: path.resolve(__dirname, '..', '..', '.env') }

    if (environment) {
      configurations.path = path.resolve(__dirname, '..', `.env.${environment}`)

      Debug(
        `Environment variables set using .env.${environment}`,
        'api:environment',
      )
    }

    const result = dotenv.config(configurations)

    if (result.error) {
      Debug('Any environment variable file found!', 'api:environment')
    }
  }
}

export default new SetEnv()
