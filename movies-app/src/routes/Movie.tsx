import React from "react";
import axios from 'axios';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../components/card/CardMovie";
import './Movie.css';

const apiKey = "api_key=aa412de9cb6448a62e521ae48ef4817d";
const baseUrl = "https://api.themoviedb.org/3/movie/";


const Movie = () => {
    
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

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
        <div className="movie-page">
            <div className="movie">{movie && (
                <div className="info-movie">
                    <CardMovie movie={movie}/>
                </div>
            )}</div>
        </div>

    )
}

export default Movie;