import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getUsers } from './queries/user';
import { createUser } from './mutations/user';

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		getUsers,
	}
})

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createUser,
	}
})

export const schema = new GraphQLSchema({
	query: Query,
	mutation: Mutation
});