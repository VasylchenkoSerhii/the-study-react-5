import { useState, useEffect } from "react";
import { getMoviesByQuery } from "services/api";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";


export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get("query") ?? "";

    useEffect(() => {

        if (queryParams === "") {
            return;
        };
        
        const fetchMoviesByQuery = async () => {
            setIsLoading(true);
            const data = await getMoviesByQuery(queryParams);
            setMovies(data.results);
            setIsLoading(false);
        };

        fetchMoviesByQuery();
    }, [queryParams])

    const handleSubmit = e => {
        e.preventDefault()

        if (query === "") {
            toast("Введіть назву фільма");
            return;
        };
        setSearchParams(query !== "" ? { query } : {});
        setQuery("");
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    type="text"
                    placeholder="Знайти фільм"
                    onChange={e => setQuery(e.target.value.trim())}
                />
                <button type="submit">
                    Знайти
                </button>
            </form>
            {movies.length > 0 && <MoviesList movies={movies} />}
            {isLoading && <Loader />}
        </main>
    );
};
