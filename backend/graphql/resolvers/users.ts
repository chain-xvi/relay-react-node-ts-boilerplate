import { IResolvers } from '@graphql-tools/utils';

import {MutationCreateUserArgs, Query, User, Mutation,} from '../generated';

// todo: extensive gql typing for the resolvers.
export const UserResolvers: IResolvers = {
	getUsers(_: void, args: {}): Array<User> {
		return [
			{
				id: 'ijaidjiaowjd',
				_id: 0,
				name: 'Anas'
			}
		]
	},
	// async createUser(_:void, args: MutationCreateUserArgs): Promise<User>{
	// 	const data = await knex('users')
	// 	.returning('_id')
	// 	.insert(
	// 		{
	// 			name: args.name,
	// 		}, ''
	// 	);

	// 	return {
	// 		id: data[0],
	// 		status: 'creating'
	// 	}
	// }
}