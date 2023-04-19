import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieGenre, apiKey} from "../../services/Api";
import CardMovie from "../../components/card/CardMovie";
import "./MoviesGenre.css"


const MoviesGenre = () => {

    const {id} = useParams();
    const [movies, setMovies] = useState([]);


    const getMovies = async (url: string) => {

        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data);
            setMovies(data.results);

        } catch (error) {
           console.log(error) 
        };
        
    
    };


    useEffect(() => {

        const getMovieByGenre = `${movieGenre}${apiKey}&with_genres=${id}&language=pt-BR`
        getMovies(getMovieByGenre);
              
    }, []);



    return (
        <div>

            <div>
                {movies?.map((movie:any) => <CardMovie key={movie.id} movie={movie}/>)}
            </div>

        </div>
    
    )

}

export default MoviesGenre;