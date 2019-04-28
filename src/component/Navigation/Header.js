import React from 'react';
import {Navbar, NavbarBrand, NavItem, Nav, NavLink,CardHeader} from 'reactstrap';

const Header = () => {
 return (
     <CardHeader>
        <Navbar color="dark" dark expand="md">
         <NavbarBrand href="/">reactstrap</NavbarBrand>
         <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/notes">Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/conversion'>Conversions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/users'>Users</NavLink>
            </NavItem>
         </Nav>
        </Navbar>
     </CardHeader>
 )
}

export default Header;
