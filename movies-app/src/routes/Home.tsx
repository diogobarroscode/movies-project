import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CardMovie from '../components/card/CardMovie';
import CoverMovie from '../components/cover/CoverMovies';
import { Genre, moviesByGenreObject} from '../types/Interfaces';
import { getGenres, getMoviesByGenre, getCover} from '../services/Api';


const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const genresList = import.meta.env.VITE_GENRE_LIST;
const movieGenre = import.meta.env.VITE_MOVIE_GENRE;


const Home = () => {

    /*
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);*/
    const [cover, setCover] = useState<any>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [moviesByGenre, setMoviesByGenre] = useState<moviesByGenreObject>({});
    
    /*
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
    
    const getGenres = async () => {
        const response = await axios.get(
            `${genresList}${apiKey}&language=pt-BR`
        );
        const data = await response.data;
        console.log(data);

        return response.data.genres;
        
    }
    
    const getMoviesByGenre = async (genreId: number) => {
        const response = await axios.get(
            `${movieGenre}${apiKey}&with_genres=${genreId}&language=pt-BR`
        );
        const data = await response.data;
        console.log(data);

        return response.data.results;
    }
    */
    


    /*const getGenres = async (url: string) => {
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
        
    
    };*/

    

    /*useEffect(() => {
        
        const getGenresList = `${genresList}${apiKey}&language=pt-BR`
        getGenres(getGenresList);

        const getMoviesList = `${movieGenre}${apiKey}&with_genres=${genres.map((genre:any)=>{return genre})}&language=pt-BR`
        getMovies(getMoviesList);

        const getCoverList = `${baseUrl}now_playing?${apiKey}&language=pt-BR`;
        getCover(getCoverList);
        
    }, []);*/

    useEffect(() => {

        /*const getCoverList = `${baseUrl}now_playing?${apiKey}&language=pt-BR`;
        getCover(getCoverList);*/

        const loadCover = async () => {
            const cover = await getCover();
            setCover(cover);
        }

        const loadGenres = async () => {
          const genres = await getGenres();
          setGenres(genres);
    
          const moviesByGenre = await Promise.all(
            genres.map(async (genre) => {
              const movies = await getMoviesByGenre(genre.id);
              return {
                genreId: genre.id,
                movies,
              };
            })
          );
    
          const moviesByGenreObject = moviesByGenre.reduce<moviesByGenreObject>(
            (acc, { genreId, movies }) => {
              return {
                ...acc,
                [genreId]: movies,
              };
            },
            {}
          );
    
          setMoviesByGenre(moviesByGenreObject);
        };
    
        loadCover();
        loadGenres();
      }, []);
    
      /*
      const handleGenreChange = async (genre: Genre) => {
        const movies = await getMoviesByGenre(genre.id);
        setMoviesByGenre({
          ...moviesByGenre,
          [genre.id]: movies,
        });
      };
    
      
      const handleGenreChange = async (genre) => {
        const movies = await getMoviesByGenre(genre.id);
        setMoviesByGenre({
          ...moviesByGenre,
          [genre.id]: movies,
        });
      };*/

      return (
        <div>
          {/*<h1>Movie Genres</h1>
          <div className="genres-container">
            {genres.map((genre) => (
              <div
                key={genre.id}
                className="genre"
                onClick={() => handleGenreChange(genre)}
              >
                {genre.name}
              </div>
            ))}
            </div>*/}

          <div className='container-cover'>
                {cover?.map((movie:any) => <CoverMovie key={movie.id} movie={movie}/>)}
          </div>

          <div className="movies-container">
            
            {genres.map((genre) =>
              moviesByGenre[genre.id] ? (
                <div key={genre.id} className="movies-by-genre">
                  
                  <h2>{genre.name}</h2>

                  <div className="movies">
                    
                        {moviesByGenre[genre.id]?.map((movie) => (
                            <CardMovie key={movie.id} movie={movie} />
                        ))}

                  </div>

                </div>
              ) : (
                
                <div key={genre.id} className="loading">
                  Loading {genre.name} movies...
                </div>

              )
            )}

          </div>
        </div>
      );
}


export default Home;