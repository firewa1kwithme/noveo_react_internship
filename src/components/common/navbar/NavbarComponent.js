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
import {Routes} from 'constants.js';
import locale from 'locale.js';

function NavbarComponent({user, logout}) {
    return (
        <Navbar className={styles.navbar}>
            <NavbarBrand to={Routes.ROOT} tag={Link}>
                <img src={logo}/>
                <span>{locale.NAVBAR.APP_TITLE}</span>
            </NavbarBrand>
            <Nav navbar>
                <Fragment>
                    <NavItem className={styles.userName}>
                        {user.username}
                    </NavItem>
                    <NavItem>
                        <Button
                            outline
                            color='white'
                            size='sm'
                            onClick={logout}
                        >
                            {locale.NAVBAR.LOGOUT_BUTTON}
                        </Button>
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
