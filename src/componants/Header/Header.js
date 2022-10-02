import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}alt="" />
            <div>
                <a href="">Order</a>
                <a href="">Order Revew</a>
                <a href="">Manage Inbentory</a>
                <a href="">Log in</a>
            </div>
        </nav>
    );
};

export default Header;