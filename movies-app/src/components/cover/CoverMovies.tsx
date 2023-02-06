import React from "react";
import { Link } from "react-router-dom";
import './CoverMovie.css';

const imgUrl = "https://image.tmdb.org/t/p/w1280/";

const CoverMovie = ({movie}) => {
    return (
        <div className="cover-movie">
            <img src={imgUrl + movie.backdrop_path} alt={movie.title} />
        </div>
    )
}

export default CoverMovie;