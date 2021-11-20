# Full-Stack Boilerplate App

This is a simple, scalable, and reusable full-stack boilerplate starter web application.

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
