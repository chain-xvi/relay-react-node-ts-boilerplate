import { GraphQLList, GraphQLNonNull } from 'graphql';
import { UserType } from '../types/user';
import { knex } from '../../db';

export const getUsers = {
	type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
	resolve() {
		return knex.select().table('users')
	}
}