import Debug from './debug'

interface IEnv {
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
export default function Env(env: string | IEnv, defaultValue: string | number | boolean): string | number | boolean | any {
  if (typeof env === 'string') {
    const environment = process.env[`${env}`]

    if (!environment) {
      Debug.log(`Variable ${env} not found`)

      return defaultValue
    }

    return environment
  }

  if (typeof env === 'object') {
    const environment = process.env[`${env.name}`]

    if (!environment) {
      Debug.log(`Variable ${env.name} not found`)

      return defaultValue
    }

    if (env.type === 'number') return parseInt(environment)
    if (env.type === 'boolean') return environment == 'true'
    if (env.type === 'object') return JSON.parse(environment)

    Debug.log(`Type ${env.type} not found, returning default value`)

    return defaultValue
  }

  throw new Error('Env type should be string or object')
}
