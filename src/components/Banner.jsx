import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import RoutePatterns from '../routing/RoutePatterns';
import Branding from '../assets/Images/BrandingIcons';
import './Banner.css';

const Banner = ({ className }) => (
	<nav className={[className, 'banner'].filter(Boolean).join(' ')}>
		<a
			className="banner_link"
			href="https://www.gcnevents.co/"
			target="_blank"
			rel="noreferrer"
		>
			<Branding.Logo style={{ height: 10 }} />
			Events
		</a>
		<a
			className="banner_link"
			href="https://club.globalcyclingnetwork.com/"
			target="_blank"
			rel="noreferrer"
		>
			<Branding.ClubLogo style={{ height: 18 }} />
			Club
		</a>
		<a
			className="banner_link"
			href="https://shop.globalcyclingnetwork.com/"
			target="_blank"
			rel="noreferrer"
		>
			<Branding.Logo style={{ height: 10 }} />
			Shop
		</a>
	</nav>
);

export default Banner;
