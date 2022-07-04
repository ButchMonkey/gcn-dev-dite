import React, { useState } from 'react';
import './AppHeader.css';
import Icons from '../assets/Images/Icons';
import Branding from '../assets/Images/BrandingIcons';
import { NavLink } from 'react-router-dom';

const socials = [
	{
		name: 'youtube',
		icon: Icons.Youtube,
		href: 'https://youtube.com/user/globalcyclingnetwork?sub_confirmation=1',
	},
	{
		name: 'facebook',
		icon: Icons.Facebook,
		href: 'https://facebook.com/globalcyclingnetwork',
	},
	{
		name: 'twitter',
		icon: Icons.Twitter,
		href: 'https://twitter.com/gcntweet',
	},
	{
		name: 'instagram',
		icon: Icons.Instagram,
		href: 'https://instagram.com/globalcyclingnetwork',
	},
];

const AppHeader = ({ className, children }) => {
	const [isSearchActive, handleSearch] = useState(false);
	const handleToggleSearch = () => {
		handleSearch((prevSearch) => !prevSearch);
	};
	return (
		<div className={[className, 'app-header'].filter(Boolean).join(' ')}>
			<h1 className="app-header_container">
				<div className="header_flex_spacer" style={{ width: 30 }} />

				<NavLink
					to="/"
					className="app-header_logo"
					style={{ display: isSearchActive ? 'none' : 'block' }}
				>
					<Branding.Logo style={{ height: 24, marginLeft: 8 }} />
				</NavLink>

				{/* <div className="app-header_flex_spacer" /> */}
				<div
					className="app-header_search-bar"
					style={{ display: isSearchActive ? 'block' : 'none' }}
				>
					<input type="text" placeholder="Search" />
				</div>
				<Icons.Search
					className={`app-header_search ${
						isSearchActive ? 'active' : ''
					}`}
					onClick={handleToggleSearch}
				/>
				<div
					className={`app-header_socials-group ${
						isSearchActive ? 'active' : ''
					}`}
				>
					{
						/* Loop over socials array, makes it easier to update */
						socials.map((social) => {
							return (
								<a
									key={social.name}
									className="app-header_social"
									href={social.href}
									target="_blank"
									rel="noreferrer"
								>
									<social.icon />
								</a>
							);
						})
					}
				</div>
			</h1>
			{children}
		</div>
	);
};

export default AppHeader;
