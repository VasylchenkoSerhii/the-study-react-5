import { useState } from "react";
import { getMoviesByQuery } from "services/api";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault()

        setIsLoading(true);
        const data = await getMoviesByQuery(query.trim());
        setMovies(data.results);
        setIsLoading(false);

        setQuery("")
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    type="text"
                    placeholder="Знайти фільм"
                    onChange={e => setQuery(e.target.value)}
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
