import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import Icons from '../assets/Images/Icons';
import BrandingIcons from '../assets/Images/BrandingIcons';
import * as SidebarItems from '../assets/Categories';

import './Sidebar.css';

const Sidebar = () => {
	const [isMenuOpen, handleMenu] = useState(false);
	const handleCloseMenu = () => {
		handleMenu(false);
	};
	const handleStateChange = (state) => {
		handleMenu(state.isOpen);
	};

	return (
		<Menu
			customBurgerIcon={
				<Icons.Menu style={{ height: 24, marginLeft: 8 }} />
			}
			customCrossIcon={false}
			isOpen={isMenuOpen}
			onStateChange={handleStateChange}
		>
			{Object.keys(SidebarItems).map((itemName) => {
				if (!SidebarItems[itemName].link) {
					return '';
				}

				return (
					<NavLink
						exact
						to={SidebarItems[itemName].link}
						className="sidebar_menu_item_link"
						activeClassName="sidebar_menu_item_link_active"
						onClick={() => handleCloseMenu()}
					>
						<div className="sidebar_menu_item" key={itemName}>
							{SidebarItems[itemName].name}
						</div>
					</NavLink>
				);
			})}

			<BrandingIcons.LogoText className="bm-footer-logo" />
		</Menu>
	);
};

export default Sidebar;
