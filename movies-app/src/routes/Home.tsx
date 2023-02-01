import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CardMovie from '../components/card/CardMovie';

const apiKey = "api_key=aa412de9cb6448a62e521ae48ef4817d";
const baseUrl = "https://api.themoviedb.org/3/movie";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const genresList = "https://api.themoviedb.org/3/genre/movie/list?";
const movieGenre = "https://api.themoviedb.org/3/discover/movie?";



const Home = () => {

    const [movies, setMovies] =useState([]);

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
        const getMoviesList = `${movieGenre}${apiKey}`
        getMovies(getMoviesList)
        
    }, []);

    return (
        <div className='container'> 
        <h2>Categoria</h2>
        <hr/><br/>
        <div className='container-movie'>
            {movies.length === 0 && <p>carregando...</p>}
            {movies.length > 0 && movies.map((movie:any) => <CardMovie key={movie.id} movie={movie}/>)}
        </div>
        </div>
    )
}

export default Home;