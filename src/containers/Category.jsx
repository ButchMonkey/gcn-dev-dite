import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import * as Categories from '../assets/Categories';

import './Category.css';

const Category = () => {
	const { category } = useParams();
	return (
		<Card>
			<div className="category_header">
				<div className="category_title">
					{Categories[category].name}
				</div>
				<div className="category_videocount">0 Videos</div>
			</div>
			<div className="category_description">
				{Categories[category].description}
			</div>
		</Card>
	);
};

export default Category;
