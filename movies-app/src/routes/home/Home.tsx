import { useState, useEffect } from 'react';
import CardMovie from '../../components/card/CardMovie';
import CoverMovie from '../../components/cover/CoverMovies';
import { Genre, moviesByGenreObject} from '../../types/Interfaces';
import { getGenres, getMoviesByGenre, getCover} from '../../services/Api';
import "./Home.css"
import { Link } from 'react-router-dom';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade"


const Home = () => {

    const [cover, setCover] = useState<any>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [moviesByGenre, setMoviesByGenre] = useState<moviesByGenreObject>({});


    useEffect(() => {

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


      return (
        <div className='container'>

          <Swiper modules={[EffectFade, Navigation, Pagination, Autoplay]}
            speed={500}
            effect= {"fade"}
            slidesPerView={1} loop 
            navigation
            pagination
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
          >

              <div className='container-cover'>

                    {cover?.map((movie:any) => <SwiperSlide><CoverMovie key={movie.id} movie={movie}/></SwiperSlide>)}

              </div>

          </Swiper>

          <div className="container-movie">
            
            {genres.map((genre) =>
              moviesByGenre[genre.id] ? (
                <div className='container-genres' key={genre.id}>
                  
                  <div className='genre-title'>
                      {<Link to={`/genre/${genre.id}`}>
                          <h2>{genre.name}</h2>
                      </Link>}
                  </div>
  
                    <div className="container-movie-genre">

                      <Swiper slidesPerView={1} spaceBetween={10} loop modules={[Navigation]} navigation 
                        breakpoints={{
                          320: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          }
                        }}
                      
                      >
                            {moviesByGenre[genre.id]?.map((movie) => (
                                <SwiperSlide><CardMovie key={movie.id} movie={movie} /></SwiperSlide>
                            ))}
                      </Swiper>  
                      
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