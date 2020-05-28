import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.png';
function MedNavbar() {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="70"
                    height="45"
                    className="logo"
                    alt="Ce-Med logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}
export default MedNavbar;