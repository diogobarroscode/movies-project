import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CardMovie from '../components/card/CardMovie';
import CoverMovie from '../components/cover/CoverMovies';

const apiKey = "api_key=aa412de9cb6448a62e521ae48ef4817d";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const genresList = "https://api.themoviedb.org/3/genre/movie/list?";
const movieGenre = "https://api.themoviedb.org/3/discover/movie?";



const Home = () => {

    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [cover, setCover] = useState([]);

    const getGenres = async (url: string) => {
        try {
            const response = await axios.get(url)
            const data = await response.data;
            console.log(data);
            setGenres(data.genres)
        } catch (error) {
            console.log(error)
        }
    }

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

    const getCover = async (url: string) => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data);
            setCover(data.results);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const getGenresList = `${genresList}${apiKey}&language=pt-BR`
        getGenres(getGenresList);

        const getMoviesList = `${movieGenre}${apiKey}&language=pt-BR`
        getMovies(getMoviesList);

        const getCoverList = `${baseUrl}now_playing?${apiKey}&language=pt-BR`;
        getCover(getCoverList);
        
    }, []);

    return (
        <div className='container'> 
        <div className='container-cover'>
            {cover?.map((movie:any) => <CoverMovie key={movie.id} movie={movie}/>)}
        </div>

        <div className='container-movie'>
            {movies.length === 0 && <p>carregando...</p>}

            {genres?.map((genre:any) =>
            <div className='container-genres' key={genre.id}>
                <div className='genre-title'>
                  <h2>{genre.name}</h2>
                </div>
                <div className='container-movie-genre'>
                  {movies?.map((movie:any) => <CardMovie key={movie.id} movie={movie}/>)}
                </div>
            </div>
            )}
        </div>
        </div>
    )
}

export default Home;