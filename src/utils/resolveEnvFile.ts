import * as dotenv from 'dotenv'

import logger from './logger'
import { Path } from '@secjs/utils'

export function resolveEnvFile() {
  const environment = process.env.NODE_ENV
  const configurations = { path: Path.noBuild().pwd('.env') }

  if (environment) {
    configurations.path = Path.noBuild().pwd(`.env.${environment}`)

    logger.debug(`Environment variables set using .env.${environment} file`)
  }

  const result = dotenv.config(configurations)

  if (result.error) {
    logger.debug('Any environment variable file found!')

    return
  }

  if (result.parsed) {
    Object.keys(result.parsed).forEach(k => (process.env[k] = result.parsed[k]))
  }
}
