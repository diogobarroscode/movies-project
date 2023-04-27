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
import "swiper/css/effect-fade";


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
            pagination={false}
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
                            slidesPerView: 4,
                            spaceBetween: 80,
                          },
                          360: {
                            slidesPerView: 4,
                            spaceBetween: 70,
                          },
                          460: {
                            slidesPerView: 4,
                            spaceBetween: 66,
                          },
                          520: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                          },
                          560: {
                            slidesPerView: 4,
                            spaceBetween: 55,
                          },
                          600: {
                            slidesPerView: 5,
                            spaceBetween: 120,
                          },
                          680: {
                            slidesPerView: 5,
                            spaceBetween: 100,
                          },
                          699: {
                            slidesPerView: 5,
                            spaceBetween: 75,
                          },
                          750: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                          },
                          820: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                          860: {
                            slidesPerView: 6,
                            spaceBetween: 100,
                          },
                          950: {
                            slidesPerView: 6,
                            spaceBetween: 70,
                          },
                          1040: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                          },
                          1141: {
                            slidesPerView: 7,
                            spaceBetween: 120,
                          },
                          1200: {
                            slidesPerView: 7,
                            spaceBetween: 90,
                          },
                          1260: {
                            slidesPerView: 7,
                            spaceBetween: 70,
                          },
                          1310: {
                            slidesPerView: 7,
                            spaceBetween: 30,
                          },
                          1351: {
                            slidesPerView: 8,
                            spaceBetween: 120,
                          },
                          1430: {
                            slidesPerView: 8,
                            spaceBetween: 90,
                          },
                          1570: {
                            slidesPerView: 8,
                            spaceBetween: 50,
                          },
                          1600: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                          },
                          1620: {
                            slidesPerView: 9,
                            spaceBetween: 120,
                          },
                          1690: {
                            slidesPerView: 9,
                            spaceBetween: 90,
                          },
                          1780: {
                            slidesPerView: 9,
                            spaceBetween: 70,
                          },
                          
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