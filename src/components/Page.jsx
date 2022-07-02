import React from 'react';
import './Page.css';
import Banner from './Banner';
import AppHeader from './AppHeader';

const Page = ({ children, banner = true }) => (
	<div className="page">
		<AppHeader className="page_header">{banner && <Banner />}</AppHeader>
		<div className="page_content">{children}</div>
	</div>
);

export default Page;
