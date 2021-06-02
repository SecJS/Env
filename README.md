# Env 🔁

> Very simple Env get function for NodeJS

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/secjs/responses?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/secjs/Env?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to always maintain a viable and simple Env get function to use in any type of `NodeJS Framework`

<img src=".github/env.png" width="200px" align="right" hspace="30px" vspace="100px">

## Installation

You can install the Env function using;

```bash
yarn add @secjs/env
```

## Usage

> You can call the Env function to get an env variable

```js
import Env from '@secjs/env'

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
