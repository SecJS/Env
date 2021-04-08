import Env from '../src'

describe('\n Env 🔁', () => {
  let DB_USERNAME = ''
  let DB_PASSWORD = ''

  beforeAll(() => {
    process.env.PORT = '3333'
    process.env.DB_DEBUG = 'false'
    process.env.DB_USERNAME = 'user'
    process.env.DB_PASSWORD = 'pass'

    DB_USERNAME = process.env.DB_USERNAME
    DB_PASSWORD = process.env.DB_PASSWORD
  })

  it('should get an environment variable from name', () => {
    expect(Env('DB_USERNAME')).toBe(DB_USERNAME)
    expect(Env('DB_PASSWORD')).toBe(DB_PASSWORD)
  })

  it('should get an environment variable from default value', () => {
    const hostDefaultValue = 'host'
    const portDefaultValue = 'port'

    const DB_HOST = Env('DB_HOST', hostDefaultValue)
    const DB_PORT = Env('DB_PORT', portDefaultValue)

    expect(DB_HOST).toBe(hostDefaultValue)
    expect(DB_PORT).toBe(portDefaultValue)
  })

  it('should get an environment variable type using a object with env name and type to Env function', () => {
    const PORT = Env({ name: 'PORT', type: 'number' })
    const DB_DEBUG = Env({ name: 'DB_DEBUG', type: 'boolean' })

    expect(PORT).toBe(3333)
    expect(DB_DEBUG).toBe(false)
  })
})
