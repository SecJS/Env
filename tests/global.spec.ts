import '../src/utils/global'

describe('\n Global 🔁', () => {
  beforeAll(() => {
    process.env.DB_USERNAME = 'user'
    process.env.DB_PASSWORD = 'pass'
  })

  it('should get an environment variable from name using global Env', () => {
    expect(Env('DB_USERNAME', '')).toBe('user')
    expect(Env('DB_PASSWORD', '')).toBe('pass')
  })
})
