# Node.js boilerplate

This API handles X

## Getting Started

* Install dependencies: `yarn`
* Boot PostgreSQL: `docker-compose up`
* Update your `.env file` with the required keys
* Migrate your local DB: `knex migrate:latest --env development`
* Seed your local DB: `knex seed:run --env development`
* Ensure all tests pass: `yarn test`
* Start the development server: `yarn run start:development`

### Prerequisites

* `NodeJS`
* `yarn`
* `Docker`

## Running the tests

Our test suite is divided into four different yarn scripts:

* `yarn lint`: this will lint the codebase
* `yarn test:integration`: this will run all integration tests
* `yarn test`: this will lint the codebase, run all tests
