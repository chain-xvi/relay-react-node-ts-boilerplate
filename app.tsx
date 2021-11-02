import React from 'react';
import styles from './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
	Home,
} from './assets/pages';

export default function App(){
	return (
		<div className={styles.app}>
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
		</div>
	)
}