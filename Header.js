import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import UserMenu from './UserMenu';
import Logout from './Logout';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    Container,
    NavItem
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleisOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="info" dark expand="md">
            <Container>
                <NavbarToggler onClick={this.toggleIsOpen} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                className="navbar-brand"
                                exact to='/'>
                                <span className="project-name">Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/"
                                active className="active">
                                NewsList
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/"
                                active className="active">
                                StudentsList
                        </NavLink>
                        </NavItem>

                        {this.props.token ? (
                            <UserMenu />
                        ) : (
                                <>
                                    <Register buttonLabel="Register" />
                                    <Login buttonLabel="Login" />
                                    <Logout buttonLabel="Logout"/>
                                </>
                            )}

                    </Nav>
                </Collapse>

            </Container>

        </Navbar>
    }
}

export default Header;