import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

export default function Header() {
    return (
        <>


            <Navbar className="bg-white navbar-header ">

                <Navbar.Brand href="#home"><strong>News Room</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto navigation-bar">
                    <Nav.Link href="#home" className='nav-link-header '>Home</Nav.Link>
                    <Nav.Link href="#features" className='nav-link-header' >Trending</Nav.Link>
                    <Nav.Link href="#pricing" className='nav-link-header'>Single News</Nav.Link>
                    <Nav.Link href="#contact" className='nav-link-header'>Contact</Nav.Link>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Categories"
                        className='nav-link-header' >
                        <NavDropdown.Item href="#action/3.1">Politics</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Sports
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Science and Technology</NavDropdown.Item>

                        <NavDropdown.Item href="#action/3.4">
                            Climatics
                        </NavDropdown.Item>
                    </NavDropdown>


                </Nav>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className="search">
                            <input type="search" name="search" id="search" placeholder='Search' />
                            <button><FaSearch /></button>
                        </div>
                    </Navbar.Text>
                    <button className='bar-btn'><FaBars /></button>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}
