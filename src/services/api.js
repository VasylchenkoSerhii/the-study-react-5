import axios from "axios";

const KEY = "8df2dcce83f746c193687df7f0053a01";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}&language=uk`);
        return response.data; 
    } catch (error) {
        console.log(error);
    };
};

export const getMovieById = async id => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=uk`);
        return response.data;
    } catch (error) {
            console.log(error)
    };
};

export const getCasteById = async id => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=uk`);
        return response.data;
    } catch (error) {
            console.log(error)
    };
};