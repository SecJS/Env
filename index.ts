import './SetEnv'
import { Debug } from '@secjs/logger'

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
export default function Env(
  env: string | IEnv,
  defaultValue: string | number | boolean,
): string | number | boolean | any {
  const environment = process.env[`${typeof env === 'string' ? env : env.name}`]

  if (!environment) {
    Debug(`Variable ${env} not found`, 'api:environment')

    return defaultValue
  }

  if (typeof env === 'object') {
    if (env.type === 'number') return parseInt(environment)
    if (env.type === 'boolean') return environment == 'true'
    if (env.type === 'object') return JSON.parse(environment)

    Debug(
      `Type ${env.type} not found, returning default value`,
      'api:environment',
    )

    return defaultValue
  }

  return environment
}
