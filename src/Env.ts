import './DotEnvResolver'

import logger from './utils/logger'

export interface IEnv {
  name: string
  type: string
}

/**
 * Get the value of an environment variable
 *
 * @param env The env name or object with env name and type
 * @param defaultValue The default value of the env if env does not exist
 * @throws Error if env type is not IEnv or string
 * @return The value of the environment or defaultValue
 */
export function Env(
  env: string | IEnv,
  defaultValue: string | number | boolean,
): string | number | boolean | any {
  let environment = process.env[`${typeof env === 'string' ? env : env.name}`]

  if (!environment) {
    logger.debug(`Variable ${env} not found`)

    return defaultValue
  }

  if (typeof env === 'object') {
    if (env.type === 'number') return parseInt(environment)
    // eslint-disable-next-line eqeqeq
    if (env.type === 'boolean') return environment == 'true'
    if (env.type === 'object') return JSON.parse(environment)

    logger.debug(`Type ${env.type} not found, returning default value`)

    return defaultValue
  }

  const matches = environment.match(/\${([^}]+)}/g)

  if (matches) {
    for (let match of matches) {
      const key = match.replace(/[!${}]+/g, '')

      match = match.replace('$', '\\$')

      environment = environment.replace(
        new RegExp(match, 'g'),
        process.env[key] || null,
      )
    }
  }

  return environment
}
