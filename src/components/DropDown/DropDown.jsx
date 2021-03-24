import styles from './DropDown.module.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

const DropDown = ({ section }) => {
    const [show, setShow] = useState(false);

    const showDropdown = event => {
        setShow(!show);
    }
    const hideDropdown = event => {
        setShow(false);
    }

    const dropDownMenu = (item) => { 
        return <NavDropdown.Item className={styles.dropDown__menu} href="/">{item}</NavDropdown.Item>;
    };
    
    const title = <span className={styles.dropDown__title}>{section.title}</span>
    
    return (
        <NavDropdown title={title} className={styles.dropDown__title} id={styles.dropdown_basic} show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {section.dropdownTitles.map(item => dropDownMenu(item))}
        </NavDropdown>
    );
};

export default DropDown;
