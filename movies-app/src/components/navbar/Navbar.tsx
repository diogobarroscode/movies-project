import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from '../search/search';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <Link to={`/`}>movies</Link>
            </h1>
            <Search />
        </nav>
    )
}

export default Navbar;