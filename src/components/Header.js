import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
function Header(props) {
    return (
        <div className="header" >
            <NavLink className='titleHead' to="/">SG</NavLink>
            <NavLink className='titleTail' to="/"> Solutions</NavLink>
        </div>
    );
}

export default Header;