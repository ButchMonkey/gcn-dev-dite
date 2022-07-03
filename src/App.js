import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Routes from './routing/Routes';
import Page from './components/Page';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<Page>
				<Routes />
			</Page>
		</BrowserRouter>
	);
}
