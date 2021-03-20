import Debug from './debug'

export default function Env(name: string, defaultValue?: any): any {
  const enviroment = process.env[`${name}`]

  if (enviroment) return enviroment
  else Debug.log(`Variable ${name} not found`)

  return defaultValue
}
