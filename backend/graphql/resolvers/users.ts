import {UserModel, UserType} from '../../models/user';

// todo: extensive gql typing for the resolvers.

module.exports = {
	getUsers: function () {
		const users = UserModel.find();
		return users;
	},
	createUser: function (args: {name: string}) {
		const rec = UserModel.create({name: args.name});
    return rec;
	},
};