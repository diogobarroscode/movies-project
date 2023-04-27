import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieGenre, apiKey, getGenres} from "../../services/Api";
import CardMovie from "../../components/card/CardMovie";
import "./MoviesGenre.css"


const MoviesGenre = () => {

    const {genreId} = useParams();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres ] = useState([]);


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

        const loadGenres = async () => {
            const genreSel = await getGenres();
            setGenres(genreSel);
        }

        const getMovieByGenre = `${movieGenre}${apiKey}&with_genres=${genreId}&language=pt-BR`
        getMovies(getMovieByGenre);
        

        loadGenres();
    }, []);

    return (
        <div className='container-movie-genre-page'>
            <div className='content-movie-genre'>
                <div className='title-movie-genre'>
                    {genres?.map((genre:any) => (
                        <h2 key={genre.id}>{genre.id == genreId && genre.name}</h2>
                    ))}
                </div>

                <div className='content-movie-genre-list'>
                    {movies?.map((movie:any) => (
                    <CardMovie key={movie.id} movie={movie} />))}
                </div>
            </div>           
        </div>
    
    )

}

export default MoviesGenre;