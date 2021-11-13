const dotenv = require('dotenv');
dotenv.config();
import express, { Response, Request } from 'express';
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const expressPlayground = require('graphql-playground-middleware-express').default;
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'path';
const mongoose = require('mongoose');

mongoose.connect(process.env.DB);

mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

// GraphQL resolvers
const resolvers = require('./graphql/resolvers');

// GraphQL schema
const schema = loadSchemaSync(join(__dirname, '/graphql/schema.graphql'), { loaders: [new GraphQLFileLoader()] });

app.use(cors());

// a great gql playground
app.get('/gql', expressPlayground({ endpoint: '/graphql' }));

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
    pretty: true
  })
);

// Home endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>API is up and up only!</h1>');
});

app.listen(process.env.PORT || 3000);