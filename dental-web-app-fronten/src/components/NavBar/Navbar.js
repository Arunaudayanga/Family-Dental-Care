import React from "react";
import {Nav,NavLink,NavMenu }from "../NavBar/NavBarElements";
  
function Navbar() {
  return (
    <>
      <Nav>
        
  
        <NavMenu>
        
          <NavLink to='/AboutUs'>
            About US
          </NavLink>
          
          <NavLink to='/Contact' >
            Contact
          </NavLink>
          <NavLink to='/MyAccount' >
            My Account
          </NavLink>
          <NavLink to='/AdminSignin' >
            Admin Panel
          </NavLink>

        

          
        </NavMenu>
        
      </Nav>
      </>
  );
}
  
export default Navbar;