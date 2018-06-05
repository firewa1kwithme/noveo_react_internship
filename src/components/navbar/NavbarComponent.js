import React from 'react';
import Link from 'react-router-dom/Link';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import Button from 'reactstrap/lib/Button';
import styles from './NavbarComponent.scss';
import logo from 'assets/images/logo.png';

function NavbarComponent() {
    return (
        <Navbar className={styles.navbar}>
            <NavbarBrand to='/' tag={Link}>
                <img src={logo}/>
                <span>Project Blog</span>
            </NavbarBrand>
            <Nav navbar>
                <NavItem className={styles.userName}>
                    User name
                </NavItem>
                <NavItem>
                    <Button outline color='white' size='sm'>Logout</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;
