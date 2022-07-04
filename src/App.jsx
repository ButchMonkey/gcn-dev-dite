import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routing/Routes';
import Page from './components/Page';
import { store } from './store/store';
import './App.css';

export default function App() {
	console.log('Environment:', process.env.NODE_ENV);
	let useForceRefresh = false;
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		// Forcing the refresh on the router to avoid issue with dev server not changing pages
		useForceRefresh = true;
	}
	return (
		<Provider store={store}>
			<BrowserRouter
				basename="/gcn-dev-site"
				forceRefresh={useForceRefresh}
			>
				<Page>
					<Routes />
				</Page>
			</BrowserRouter>
		</Provider>
	);
}
