import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import Button from 'reactstrap/lib/Button';
import styles from './NavbarComponent.scss';
import logo from 'assets/images/logo.png';

function NavbarComponent({user, logout}) {
    return (
        <Navbar className={styles.navbar}>
            <NavbarBrand to='/' tag={Link}>
                <img src={logo}/>
                <span>Project Blog</span>
            </NavbarBrand>
            <Nav navbar>
                <Fragment>
                    <NavItem className={styles.userName}>
                        {user.name}
                    </NavItem>
                    <NavItem>
                        <Button outline color='white' size='sm' onClick={logout}>Logout</Button>
                    </NavItem>
                </Fragment>
            </Nav>
        </Navbar>
    );
}


NavbarComponent.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

export default NavbarComponent;
