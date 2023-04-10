import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [movies, setMovies] = useState([]);


    return(
        <div>Resultados para: {query}</div>
    );
};

export default SearchPage;