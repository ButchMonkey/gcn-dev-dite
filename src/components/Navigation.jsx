import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import RoutePatterns from '../routing/RoutePatterns';
import './Navigation.css';

const Navigation = ({ className }) => (
	<nav
		className={[
			className,
			'navigation',
		].filter(Boolean).join(' ')}
	>
		<Link className="navigation_link" to={RoutePatterns.Home} exact>Home</Link>
	</nav>
);

export default Navigation;
