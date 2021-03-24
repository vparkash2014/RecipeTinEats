import styles from './NavBarSmall.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './../NavLink';
import navMenu from './../../assets/menu.js'
import SpNavLink from './../SpNavLink';
import star from './../../assets/star.svg';
import DropDown from '../DropDown/DropDown';

const NavBarSmall = () => {

    const displayMenuItem = (section) => {
        if (section.special) { 
            return <SpNavLink title={section.title} icon={star}/>;
        } else if (section.dropdown) {
            return <DropDown section={section} />;
        };

        return <NavLink title={section.title} link='/' icon={section.icon} />
    };

    return (
        <Navbar position="fixed" className={styles.Navbar}>
            {navMenu.map(section => displayMenuItem(section) )}
        </Navbar>
    );
};

export default NavBarSmall;