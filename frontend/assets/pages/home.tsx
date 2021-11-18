import React, {Suspense} from 'react';
import styles from './home.scss';

import {
	useLazyLoadQuery,
	graphql,
} from 'react-relay';

import type {homeUsersQuery} from './__generated__/homeUsersQuery.graphql';

export function Home() {
	return (
		<div>
			<h1>Home Page</h1>
			<Suspense fallback={'loading users...'}>
				<UsersList />
			</Suspense>
		</div>
	)
}

function UsersList() {
	const resp = useLazyLoadQuery<homeUsersQuery>(
		graphql`
			query homeUsersQuery{
				getUsers{
					id
					name
				}
			}
		`,
		{}
	);
	const users = resp.getUsers;
	return (
		<div className={styles.usersList}>
			{
				users.map(
					function(user) {
						return (
							<div className="user" key={user.id}>
								{user.name}
							</div>
						)
					}
				)
			}
		</div>
	)
}