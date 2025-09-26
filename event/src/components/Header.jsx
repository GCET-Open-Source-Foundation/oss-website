import React from 'react';
import './Header.css';
import logoImage from './logo.jpg';

function Header() {
    return (
        <header className="app-header">
            <img src={logoImage} alt="Open Source Club Logo" className="app-logo" />
            <h1 className="header-title">Events</h1>
        </header>
    );
}

export default Header;