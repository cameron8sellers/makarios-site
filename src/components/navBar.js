import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import './css/navBar.css'


const NavBar = () => {

    return(

    <div className='nav-container'>
                        <Nav className='nav'>
                            <NavItem className='main-heading'><NavLink href='/'>Makarios Assisted Livivng</NavLink></NavItem>

                            <NavItem>
                                <NavLink href='#'>Information</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='#'>Locations</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='#'>Services</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='#'>Contact</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href='#'>Gallery</NavLink>
                            </NavItem>

                        </Nav>        

                    </div> 
    )
}

export default NavBar