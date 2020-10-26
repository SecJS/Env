export default function Env(name: string, defaultValue?: any): any {
  if (process.env[`${name}`]) {
    return process.env[`${name}`]
  }

  return defaultValue
}