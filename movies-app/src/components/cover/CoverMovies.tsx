import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineMovieFilter } from "react-icons/md"
import './CoverMovie.css';
import { Movie } from "../../types/Interfaces"

interface Props {
    movie: Movie;
  }

const imgUrlFull = import.meta.env.VITE_IMG_URL_FULL;

const CoverMovie = ({movie}:Props) => {
    return (

        <div className="cover-movie">

            

                <div className="movie-info-cover">

                    {<Link to={`/movie/${movie.id}`}>
                        <h1>{movie.title}</h1>
                    </Link>}

                    <span><MdOutlineMovieFilter />Lançamento</span>

                    <p>{movie.overview}</p>

                    <div className="buttons">
                        <button className="trailer"><FaPlay />Trailer</button>
                        {<Link to={`/movie/${movie.id}`}>
                            <button className="more"><BsInfoCircle />Mais informações</button>
                        </Link>}
                    </div>
                    
                </div>

                <img src={imgUrlFull + movie.backdrop_path} alt={movie.title} />

            
            
        </div>
    )
}

export default CoverMovie;