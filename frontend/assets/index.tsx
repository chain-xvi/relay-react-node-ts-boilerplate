import React, { Suspense } from 'react';
import styles from './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
	Home,
} from './pages';

import {
	Relay,
} from './data/relay';

export function Container(){
	return (
		<Suspense fallback={"loading..."}>
			<Relay>
				<Router>
		      <div>
		        <nav>
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		          </ul>
		        </nav>
		        <Switch>
		          <Route path="/">
		            <Home />
		          </Route>
		        </Switch>
		      </div>
		    </Router>
			</Relay>
		</Suspense>
	)
}