import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './search.css';

const Search = () => {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(!search) return
        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return(
        <div className='nav-box'>
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar' 
            onChange={(e) => setSearch(e.target.value)} 
            value = {search}
            />

            <button type='submit'><FaSearch /></button>
        </form>
        
    </div>
    )
}

export default Search;