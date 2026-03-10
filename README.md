<p align="center">
  <a href="https://www.zapsecret.app" target="blank"><img src="/client/public/zaplogo.png" width="100" alt="Nest Logo" /></a>
</p>

## ZapSecret

[ZapSecret](https://www.zapsecret.app) lets you share sensitive information with confidence. Just paste your message, set an expiry, and it generate a one-time, self-destructing link that can be shared securely.

## Screenshots

<table>
  <tr>
    <td><img src="docs/images/Screenshot%202026-03-10%20at%2023.35.40.png" width="400" alt="ZapSecret Home" /></td>
    <td><img src="docs/images/Screenshot%202026-03-10%20at%2023.43.40.png" width="400" alt="ZapSecret View Secret" /></td>
  </tr>
</table>

### Project setup

```bash
# installs server and client packages, runs prisma generate
$ npm install
```

### Compile and run the project

```bash
# development (starts both server and client server)
$ npm run dev

# build
$ npm run build

# production mode
$ npm run start:prod
```

### Run tests

```bash
# unit tests (client)
$ cd client && npm run test

# unit tests (server)
$ npm run test

# e2e tests
$ npm run test:e2e
```
