import { Box } from "components/Box/Box";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { NavLink } from "react-router-dom";
import { Title } from "./TrendingList.styled";
import Loader from "components/Loader/Loader";

export default function TrendingList() {

    const [trending, setTranding] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            const data = await getTrendingMovies();
            setTranding(data.results);
            setIsLoading(false);
        };

        fetchMovies();
    }, []);

    return (
        <>
            {trending && (
                <Box
                    as="ul"
                    display="grid"
                    gridTemplateColumns="auto auto auto"
                >
                    {trending.map(({ title, id, poster_path }) =>
                        <li key={id}>
                            <NavLink to={`movies/${id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                                <Title>{title}</Title>
                            </NavLink>
                        </li>
                    )}
                </Box>)}
            {isLoading && <Loader />}
        </>
    );
};
