import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import Card from '../components/Card';
import * as Categories from '../assets/Categories';

import './Category.css';

const Category = () => {
	const { category } = useParams();
	return (
		// <Page>
		<Card>
			<h3>{Categories[category].name}</h3>
			<p>{Categories[category].description}</p>
		</Card>
		// </Page>
	);
};

export default Category;
