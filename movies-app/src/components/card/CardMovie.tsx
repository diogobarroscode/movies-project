import React from "react";
import { Link } from "react-router-dom";
import './CardMovie.css';

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
}

export default CardMovie;