import SearchBar from './../SearchBar';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/logo.svg';
import styles from './NavBarBig.module.scss'
import SocialList from './../SocialList';
import { useState } from 'react';

const NavBarBig = () => {
    const [scroll, setScroll] = useState(false);

    const changeNavBar = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
            return;
        }
        setScroll(false);
    }


    return (
        <Navbar sticky="top" className={ scroll ? styles.NavBar__scroll : styles.NavBar}>
            <Navbar.Brand href="#home">
                <img className={scroll ? styles.NavBar__logo_scroll : styles.NavBar__logo} alt="" src={logo}/>
            </Navbar.Brand>
            <div className={styles.NavBar__right}>
                <SearchBar />
                <SocialList />
                
            </div>
        </Navbar>
    );
};

export default NavBarBig;