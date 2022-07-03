import React from 'react';
// import { NavLink } from 'react-router-dom';
// import RoutePatterns from '../routing/RoutePatterns';
import Page from '../components/Page';
import Card from '../components/Card';

const Home = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		}}
	>
		<Card>
			Home
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum euismod, nisi eget consectetur consectetur,
				</p>
			</div>
		</Card>
	</div>
);

export default Home;
