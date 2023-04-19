import { Link } from "react-router-dom";
import { Movie } from '../../types/Interfaces';

const imgUrlCard = import.meta.env.VITE_IMG_URL_SMALL;

import './CardMovie.css';

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