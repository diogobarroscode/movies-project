import axios from "axios";

export const apiKey = import.meta.env.VITE_API_KEY;
export const baseUrl = import.meta.env.VITE_BASE_URL;
export const genresList = import.meta.env.VITE_GENRE_LIST;
export const movieGenre = import.meta.env.VITE_MOVIE_GENRE;
export const searchURL = import.meta.env.VITE_API_SEARCH;
export const imgUrlSmall = import.meta.env.VITE_IMG_URL_SMALL;
export const imgUrlMedium = import.meta.env.VITE_IMG_URL_MEDIUM;
export const imgUrlLarge = import.meta.env.VITE_IMG_URL_LARGE;
export const imgUrlFull = import.meta.env.VITE_IMG_URL_FULL;


export const getCover = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}now_playing?${apiKey}&language=pt-BR`
        );
        const data = await response.data;
        console.log(data);

        return response.data.results;
        
    } catch (error) {
        console.log(error)
    }
}

export const getGenres = async () => {
    try {
        const response = await axios.get(
            `${genresList}${apiKey}&language=pt-BR`
        );
        const data = await response.data;
        console.log(data);

        return response.data.genres;

    } catch (error) {
        console.log(error)
    }
}

export const getMoviesByGenre = async (genreId: number | string) => {
    try {
        const response = await axios.get(
            `${movieGenre}${apiKey}&with_genres=${genreId}&language=pt-BR`
        );
        const data = await response.data;
        console.log(data);

        return response.data.results;

    } catch (error) {
        console.log(error)
    }
}