import { Env, IEnv } from '../Env'

export {}

declare global {
  function Env(
    env: string | IEnv,
    defaultValue: string | number | boolean,
  ): string | number | boolean | any
}

const _global = global as any

_global.Env = Env
