import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const apiKey = "api_key=aa412de9cb6448a62e521ae48ef4817d";
const baseUrl = "https://api.themoviedb.org/3/movie";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const genresList = "https://api.themoviedb.org/3/genre/movie/list?";
const movieGenre = "https://api.themoviedb.org/3/discover/movie?";

const Home = () => {
    
    const [topMovies, setTopMovies] = useState([]);
   
    const listGenres = async (url: string) => {

        try {
            
            const response = await axios.get(url)
            const data = await response.data;
            console.log(data)

        } catch (error) {
           console.log(error) 
        }
    
    };

    useEffect(() => {
        const listGenresMovies = `${genresList}${apiKey}`
        console.log(listGenresMovies)
        listGenres(listGenresMovies)
    }, [])

    return (
        <h2>Filmes</h2>
    )
}

export default Home;