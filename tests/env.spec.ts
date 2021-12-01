import { Env } from '../src/Env'
import { resolveEnvFile } from '../src/utils/resolveEnvFile'

describe('\n Env 🔁', () => {
  let DB_USERNAME = ''
  let DB_PASSWORD = ''

  beforeAll(() => {
    process.env.HOST = '127.0.0.1'
    process.env.PORT = '3333'
    process.env.DB_DEBUG = 'false'
    process.env.DB_USERNAME = 'user'
    process.env.DB_PASSWORD = 'pass'
    process.env.OBJECT = '{"joao":"joao"}'
    process.env.DB_SYNC = 'true'

    DB_USERNAME = process.env.DB_USERNAME
    DB_PASSWORD = process.env.DB_PASSWORD
  })

  it('should get an environment variable from name', () => {
    expect(Env('DB_USERNAME', '')).toBe(DB_USERNAME)
    expect(Env('DB_PASSWORD', '')).toBe(DB_PASSWORD)
  })

  it('should get an environment variable from default value', () => {
    const hostDefaultValue = 'host'
    const portDefaultValue = 'port'

    const DB_HOST = Env('DB_HOST', hostDefaultValue)
    const DB_PORT = Env('DB_PORT', portDefaultValue)

    expect(DB_HOST).toBe(hostDefaultValue)
    expect(DB_PORT).toBe(portDefaultValue)
  })

  it('should replace template strings on environment values', () => {
    // eslint-disable-next-line no-template-curly-in-string
    process.env.APP_URL = 'http://${HOST}:${PORT}'

    expect(Env('APP_URL', '')).toBe('http://127.0.0.1:3333')
  })

  it('should get an environment variable type using a object with env name and type to Env function', () => {
    const PORT = Env({ name: 'PORT', type: 'number' }, '')
    const DB_DEBUG = Env({ name: 'DB_DEBUG', type: 'boolean' }, '')
    const OBJECT = Env({ name: 'OBJECT', type: 'object' }, '')

    expect(PORT).toBe(3333)
    expect(DB_DEBUG).toBe(false)
    expect(OBJECT.joao).toBe('joao')
  })

  it('should resolve the .env.testing file and subscribe all envs from process.env that are in this file', () => {
    process.env.NODE_ENV = 'testing'

    resolveEnvFile()

    const DB_SYNC = Env('DB_SYNC', '')

    expect(DB_SYNC).toBe('false')
  })
})
