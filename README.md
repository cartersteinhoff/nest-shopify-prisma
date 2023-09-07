## Description

Nest, Prisma, and Shopify "Offline" Auth/Webhook MVP. 

## 1. Installation

```bash
$ npm install
```

## 2. ENV (create .env file)
```bash
DATABASE_URL=""
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
HOST=

# HOST is the address your app is currently located at. Preferrably you are using a secure tunnel from localhost using something like NGROK.  
```

## 3. Prisma Inital Migrations and ORM/Schema Generation
```bash
# creates initial migration 
$ prisma migrate dev --name init

# creates Sessions table in DB and scaffolds ORM API
$ prisma generate
```
## 4. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Main Package Stack

| Package                                       | Description                                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [@nestjs-shopify/core](packages/core)         | Use to initialize the `@shopify/shopify-api` package with your Shopify app credentials. Required for webhooks and auth. |
| [@nestjs-shopify/webhooks](packages/webhooks) | Register and process Shopify webhooks.                                                                                  |
| [@nestjs-shopify/auth](packages/auth)         | Setup online and/or offline auth and protected your NestJS API with Shopify JWT session tokens.                         |
| [@nestjs-shopify/graphql](packages/graphql)   | Setup a Shopify GraphQL Admin API proxy that is automatically setup to use online session tokens.                       |


