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
// GraphQL schema
import {schema} from './graphql';

app.use(cors());

const fs = require('fs');
const graphql = require('graphql');
const schemaPath = '../frontend/schema.graphql';
const schemaString = graphql.printSchema(schema);
let oldSchemaString;
try {
  oldSchemaString = fs.readFileSync(schemaPath);
} catch (e) {}

if(schemaString !== oldSchemaString){
  fs.writeFileSync(
    schemaPath,
    schemaString
  );
  console.log('schema updated!');
}

// a great gql playground
app.get('/gql', expressPlayground({ endpoint: '/graphql' }));

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

// Home endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>API is up and up only!</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is up, and up only at ${PORT}`));