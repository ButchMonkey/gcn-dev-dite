import React, { Children } from 'react';
import './AppHeader.css';
import Icons from '../assets/Images/Icons';
import Branding from '../assets/Images/BrandingIcons';

// import Icons from '../assets/images/Icons';

const AppHeader = ({ className, children }) => (
	<div className={[className, 'app-header'].filter(Boolean).join(' ')}>
		<h1 className="app-header_container">
			<Icons.Menu fill="#00FF00" style={{ height: 24, marginLeft: 8 }} />
			<Branding.Logo
				fill="#00FF00"
				style={{ height: 24, marginLeft: 8 }}
			/>
			<div className="app-header_flex_spacer" />
			<Icons.Search fill="#00FF00" />
			<div className="app-header_divider" />
			<Icons.Youtube fill="#00FF00" />
			<Icons.Facebook fill="#00FF00" />
			<Icons.Twitter fill="#00FF00" />
			<Icons.Instagram fill="#00FF00" />
		</h1>
		{children}
	</div>
);

export default AppHeader;
