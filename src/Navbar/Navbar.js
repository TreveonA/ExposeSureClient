import React, { toggle, isOpen, useState} from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, Button} from 'reactstrap';

const Sitebar = (props) => {
    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar