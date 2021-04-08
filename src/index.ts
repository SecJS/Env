import Debug from './debug'

interface IEnv {
  name: string
  type: string
}

export default function Env(env: string | IEnv, defaultValue?: any): any {
  if (typeof env === 'string') {
    const environment = process.env[`${env}`]

    if (!environment) {
      Debug.log(`Variable ${env} not found`)

      return defaultValue
    }

    Debug.log(`${env}=${process.env[`${env}`]}: string`)
    return environment
  }

  if (typeof env === 'object') {
    const environment = process.env[`${env.name}`]

    if (!environment) {
      Debug.log(`Variable ${env.name} not found`)

      return defaultValue
    }

    Debug.log(`${env.name}=${environment}: ${env.type}`)

    if (env.type === 'number') return parseInt(environment)
    if (env.type === 'boolean') return environment == 'true'
  }

  throw new Error('Env type should be string or object')
}
