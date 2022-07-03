import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import Icons from '../assets/Images/Icons';
import BrandingIcons from '../assets/Images/BrandingIcons';
import * as SidebarItems from '../assets/Categories';

import './Sidebar.css';

const Sidebar = () => {
	return (
		<Menu
			customBurgerIcon={
				<Icons.Menu style={{ height: 24, marginLeft: 8 }} />
			}
			customCrossIcon={false}
		>
			{Object.keys(SidebarItems).map((itemName) => {
				if (!SidebarItems[itemName].link) {
					return '';
				}

				return (
					<div key={itemName}>
						<div className="sidebar_menu_item">
							<NavLink
								exact
								to={SidebarItems[itemName].link}
								className="sidebar_menu_item_link"
								activeClassName="sidebar_menu_item_link_active"
							>
								{SidebarItems[itemName].name}
							</NavLink>
						</div>
					</div>
				);
			})}

			<BrandingIcons.LogoText className="bm-footer-logo" />
		</Menu>
	);
};

export default Sidebar;
