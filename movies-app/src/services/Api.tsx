import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const genresList = import.meta.env.VITE_GENRE_LIST;
const movieGenre = import.meta.env.VITE_MOVIE_GENRE;


/*export const getCover = async (url: string) => {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        setCover(data.results);

    } catch (error) {
        console.log(error)
    }
}*/

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

export const getMoviesByGenre = async (genreId: number) => {
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