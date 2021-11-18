import { toGlobalId } from 'graphql-relay';
import { GraphQLNonNull } from 'graphql';
import { UserType } from '../types/user';
import { knex } from '../../db';

import {
	GraphQLString,
} from 'graphql';

export const createUser = {
	type: new GraphQLNonNull(UserType),
	args: {
		name: { type: GraphQLString },
	},
	async resolve(_: any, args: any) {
		const {name} = args;
		const data = await knex('users').returning('id').insert({name});
		return {
			id: toGlobalId('User', data[0]),
			name,
		}
	}
}