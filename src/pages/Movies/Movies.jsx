import { useState, useEffect } from "react";
import { getMoviesByQuery } from "services/api";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { Main, SearchForm, FormInput, FormBtn } from "./Movies.styled";
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
        <Main>
            <SearchForm onSubmit={handleSubmit}>
                <FormInput
                    value={query}
                    type="text"
                    placeholder="Знайти фільм"
                    onChange={e => setQuery(e.target.value.trim())}
                />
                <FormBtn type="submit">
                    Знайти
                </FormBtn>
            </SearchForm>
            {movies.length > 0 && <MoviesList movies={movies} />}
            {isLoading && <Loader />}
        </Main>
    );
};
