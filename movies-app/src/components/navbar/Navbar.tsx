import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import Search from '../search/search';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='navbar'>

            <div className='logo'>
                <h1>
                    <Link to={`/`}>movies</Link>
                </h1>
            </div>

            <div className='nav-box'>
                <div className='menu'>
                    <FiMenu />
                </div>
                
                <Search />

                <div className='search-mobile'>
                    <FaSearch />
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;