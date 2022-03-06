import * as dotenv from 'dotenv'

import { Path, Debug } from '@secjs/utils'

export function resolveEnvFile() {
  const debug = new Debug('Env', 'api:environments')

  const environment = process.env.NODE_ENV
  const configurations = { path: Path.noBuild().pwd('.env') }

  if (environment) {
    configurations.path = Path.noBuild().pwd(`.env.${environment}`)

    debug.log(`Environment variables set using .env.${environment} file`)
  }

  const result = dotenv.config(configurations)

  if (result.error) {
    debug.log('Any environment variable file found!')

    return
  }

  if (result.parsed) {
    Object.keys(result.parsed).forEach(k => (process.env[k] = result.parsed[k]))
  }
}
