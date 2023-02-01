import React from "react";
import { Link } from "react-router-dom";
import './CardMovie.css';

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const CardMovie = ({movie}) => {
    return (
        <div className="card-movie">
            <img src={imgUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    )
}

export default CardMovie;