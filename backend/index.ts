const dotenv = require('dotenv');
dotenv.config();
import express, { Response, Request } from 'express';
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const expressPlayground = require('graphql-playground-middleware-express').default;
const { run } = require('./db-connection');
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'path';

// GraphQL resolvers
const resolvers = require('./graphql/resolvers');

// GraphQL schema
const schema = loadSchemaSync(join(__dirname, '/graphql/schema.graphql'), { loaders: [new GraphQLFileLoader()] });

run().catch(console.dir);
app.use(cors());

// a great gql playground
app.get('/gql', expressPlayground({ endpoint: '/graphql' }));

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: {resolvers},
    graphiql: true,
    pretty: true
  })
);

// Home endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>API is up and up only!</h1>');
});

app.listen(process.env.PORT || 3000);