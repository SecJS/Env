import * as dotenv from 'dotenv'

import logger from './utils/logger'

import { resolve } from 'path'

const environment = process.env.NODE_ENV
const configurations = { path: resolve(process.cwd(), '.env') }

if (environment) {
  configurations.path = resolve(process.cwd(), `.env.${environment}`)

  logger.debug(`Environment variables set using .env.${environment}`)
}

const result = dotenv.config(configurations)

if (result.error) {
  logger.debug('Any environment variable file found!')
}
