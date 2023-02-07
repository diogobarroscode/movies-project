import React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './Movie.css';
import CoverMovie from "../components/cover/CoverMovies";

const apiKey = "api_key=aa412de9cb6448a62e521ae48ef4817d";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const imgUrl2 = "https://image.tmdb.org/t/p/w1280/";


const Movie = () => {
    
    const {id} = useParams();
    const [movie, setMovie] = useState<any>([]);

    const getMovie = async (url: string) => {

        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data);
            setMovie(data);

        } catch (error) {
           console.log(error) 
        };
        
    
    };


    useEffect(() => {
        const getMoviePage = `${baseUrl}${id}?${apiKey}&language=pt-BR`
        getMovie(getMoviePage);
    }, [])
    
    return (
        <div className="movie-page" style={{backgroundImage: `url(${imgUrl2 + movie.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>

           <div className="movie">
                <div className="movie-folder">
                    <img src={imgUrl + movie.poster_path} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <span>
                        <ul>
                            <li>Duração: {movie.runtime} min</li>
                        </ul>
                    </span>

                    <span className="more-info">
                        <h2>Sinopse</h2>
                        <p className="sinopse">{movie.overview}</p>
                    </span>
                </div>
                
           </div>
        </div>

    )
}

export default Movie;