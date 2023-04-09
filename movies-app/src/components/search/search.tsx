import { FaSearch } from "react-icons/fa";
import './search.css';

const Search = () => {
    return(
        <div className='nav-box'>
        <form>
            <input type="text" placeholder='Buscar' />
            <button type='submit'><FaSearch /></button>
        </form>
    </div>
    )
}

export default Search;