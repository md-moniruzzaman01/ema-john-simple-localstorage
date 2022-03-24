import React from 'react';
import logo from '../../images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div><img src={logo} alt="" /></div>
            <div className='nav-link'><ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order review</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/inventory">manage Inventory</a></li>
             
                </ul>
            </div>
        </div>
    );
};

export default Navbar;