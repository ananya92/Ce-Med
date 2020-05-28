import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function MedNavbar() {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img
                    src="/favicon.png"
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