import React from "react";
import { Link } from "react-router-dom";
import { Movie } from '../../types/Interfaces';

const imgUrlCard = import.meta.env.VITE_IMG_URL_SMALL;

import './CardMovie.css';
/*
const imgUrlCard = import.meta.env.VITE_IMG_URL_SMALL;

const CardMovie = ({movie}) => {
    return (
        <div className="card-movie">
            {<Link to={`/movie/${movie.id}`}>
                <img src={imgUrlCard + movie.poster_path} alt={movie.title} />    
            </Link>}
            <h2>{movie.title}</h2>
        </div>
    )
}*/
/*
interface CardMovieProps {
    title: string;
    posterPath: string;
  }
  
  const CardMovie: React.FC<CardMovieProps> = ({ title, posterPath }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  
    return (
      <div className="movie">
        <img src={posterUrl} alt={title} />
        <h2>{title}</h2>
      </div>
    );
  };
  */

  interface Props {
    movie: Movie;
  }
  
  const CardMovie = ({ movie }: Props) => {
    return (
        <div className="card-movie">
        {<Link to={`/movie/${movie.id}`}>
            <img src={imgUrlCard + movie.poster_path} alt={movie.title} />    
        </Link>}
        <h2>{movie.title}</h2>
    </div>
    );
  };


export default CardMovie;