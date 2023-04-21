import { Link } from "react-router-dom";
import './CoverMovie.css';
import { Movie } from "../../types/Interfaces"

interface Props {
    movie: Movie;
  }

const imgUrl = import.meta.env.VITE_IMG_URL_FULL;

const CoverMovie = ({movie}:Props) => {
    return (

        <div className="cover-movie">

            {<Link to={`/movie/${movie.id}`}>
                <img src={imgUrl + movie.backdrop_path} alt={movie.title} />
            </Link>}
            
        </div>
    )
}

export default CoverMovie;