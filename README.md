# Full-Stack Boilerplate App

This is a simple, scalable, and reusable full-stack boilerplate starter web application. To get started make sure to go through all the steps in this guide!

## Tech Stack

It uses a pretty modern tech stack all around, frontend and backend.

#### Frontend:
- React
- Webpack
- Babel
- TypeScript
- SCSS Modules
- GraphQL
- Relay

#### Backend:
- Node
- Express
- MySQL
- Knex
- GraphQL
- TypeScript
- Relay

## Clone & Usage

First let's clone the app:

```
git clone https://github.com/iamanas20/relay-react-node-ts-boilerplate.git
cd relay-react-node-ts-boilerplate
```

### Frontend:
```
cd frontend
yarn install
```
Run each of the following commands separately:
```
yarn watch
yarn relay --watch
yarn tsc -w
```
- `yarn watch`: to start the app using webpack.
- `yarn relay --watch`: to watch for any graphql changes and generate relay files.
- `yarn tsc --w`: to watch typescript files and log any errors.

### Backend:
```
cd backend
yarn install
```
Run each of the following commands separately:
```
yarn watch
yarn tsc -w
```
- `yarn watch`: to start the app using nodemon.
- `yarn tsc --w`: to watch typescript files and log any errors.

## .env variables:

You will need `.env` variables to both the backend and frontend, fill these variables accordingly:

### Backend:
```
DB_URL=127.0.0.1
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### Frontend:
```
API=http://localhost:3000/graphql
```

## Database setup:

This example is using MySQL, we'll create a new database using [MySQL Workbench](https://www.mysql.com/products/workbench/)
- Click on the plus to create a new connection from the home page.
- Give the connection a name, give the schema a name and click on OK.
- Your database is created! Add a table. Call it users.
- Add fields: id -> INT PK NN AI, name -> VARCHAR(80)
- Update the .env in your backend to the appropriate info from the database.

If you have any questions contact [me](https://www.facebook.com/iamanas22/)
