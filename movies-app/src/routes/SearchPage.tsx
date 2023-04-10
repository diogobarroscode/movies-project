import axios from 'axios';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardMovie from '../components/card/CardMovie';


const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [searchMovies, setSearchMovies] = useState([]);

    const getSearchMovies = async (url: string) => {

        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data);
            setSearchMovies(data.results);

        } catch (error) {
           console.log(error) 
        };
        
    };

    useEffect(() => {

        const getSearchList = `${searchURL}${apiKey}&query=${query}&language=pt-BR`
        getSearchMovies(getSearchList);
        
    }, [query]);


    return(
        <div>
            <div>Resultados para: {query}</div>
        
            <div className='container-movie-genre'>
                {searchMovies?.map((movie: any) => <CardMovie key={movie.id} movie={movie} />)}
            </div>

        </div>

    );
};

export default SearchPage;