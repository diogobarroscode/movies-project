import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <Link to={`/`}>movies</Link>
            </h1>
            <div className='nav-box'>
                <form>
                    <input type="text" placeholder='Buscar' />
                    <button type='submit'><FaSearch /></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;