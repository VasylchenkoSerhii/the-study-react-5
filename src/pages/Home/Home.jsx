import { getTrendingMovies } from "services/api";
import { useState, useEffect } from "react";
import { Main, Title } from "./Home.styled";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            const data = await getTrendingMovies();
            setMovies(data.results);
            setIsLoading(false);
        };

        fetchMovies();
    }, []);

    return (
        <Main>
            <Title>Фільми в тренді на сьогодні</Title>
            <MoviesList movies={movies} />
            {isLoading && <Loader />}
        </Main>
    );
};
