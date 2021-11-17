# Env 🔁

> Very simple Env get function for NodeJS

[![GitHub followers](https://img.shields.io/github/followers/jlenon7.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/jlenon7?tab=followers)
[![GitHub stars](https://img.shields.io/github/stars/secjs/config.svg?style=social&label=Star&maxAge=2592000)](https://github.com/secjs/env/stargazers/)

<p>
    <a href="https://www.buymeacoffee.com/secjs" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/secjs/env?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/secjs/env?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">

  <img alt="Commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to always maintain a viable and simple Env function to use in any type of `NodeJS Framework`. 
`@secjs/env` uses `dotenv` library to find .env file in the project root, you can run your application with environment `NODE_ENV` set
and `@secjs/env` will try to find the `.env.${NODE_ENV}`.

> Example

```bash
NODE_ENV=testing node index.js
```

If index.js file is using Env function the singleton of environment will run and find verify is exists
NODE_ENV. In this case `@secjs/env` will use .env.testing file.

<img src=".github/env.png" width="200px" align="right" hspace="30px" vspace="100px">

## Installation

> To use the high potential from @secjs/base you need to install first this packages from SecJS,
> it keeps as dev dependency because one day @secjs/core will install everything once.

```bash
npm install @secjs/logger
```

> Than you can install @secjs/env;

```bash
npm install @secjs/env
```

## Usage

> You can use Env function as a global importing just one time the global file

```ts
import '@secjs/env/src/utils/global.ts'

Env('DB_DATABASE', 'my-database')
```

> Or you can call directly the Env function

```ts
import { Env } from '@secjs/env'

// Simulating .env file
DB_PORT=5432
DB_DEBUG=false
DB_DATABASE='database'

// The response value will be the value of DB_DATABASE variable or my-database by default
const db = Env('DB_DATABASE', 'my-database')
console.log(db) // 'database'

const dbPort = Env('DB_PORT', '5432')
console.log(dbPort) // '5432'

const dbDebug = Env('DB_DEBUG', 'false')
console.log(dbDebug) // 'false' // Same as true value

const dbPortCasted = Env({ name: 'DB_PORT', type: 'number' }, 5432)
console.log(dbPortCasted) // 5432

const dbDebugCasted = Env({ name: 'DB_DEBUG', type: 'boolean' }, false)
console.log(dbDebugCasted) // false
```

---

## License

Made with 🖤 by [jlenon7](https://github.com/jlenon7) :wave:
