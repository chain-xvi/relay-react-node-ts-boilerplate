import { globalIdField, } from 'graphql-relay';

import {
	GraphQLNonNull,
	GraphQLInt,
} from 'graphql';

import { nodeInterface } from './nodeDef';

import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
} from 'graphql';

export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: globalIdField(),
		name: { type: GraphQLString },
	},
	interfaces: () => [nodeInterface],
})