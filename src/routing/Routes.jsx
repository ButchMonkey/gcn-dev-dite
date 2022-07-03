import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RoutePatterns from './RoutePatterns';

import Home from '../containers/Home';
import Videos from '../containers/Videos';
import Category from '../containers/Category';

const Routes = () => {
	return (
		<Switch>
			<Route path={RoutePatterns.Category} component={Category} />
			<Route path={RoutePatterns.Videos} component={Videos} />
			<Route path={RoutePatterns.Home} component={Home} exact />
			<Route path="" component={Home} />
		</Switch>
	);
};

export default Routes;
