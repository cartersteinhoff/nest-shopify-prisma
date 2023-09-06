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
