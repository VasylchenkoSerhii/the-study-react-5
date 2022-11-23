import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { NavLink, useLocation } from "react-router-dom";
import { Title, List } from "./TrendingList.styled";
import Loader from "components/Loader/Loader";

export default function TrendingList() {

    const [trending, setTranding] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

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
                <List>
                    {trending.map(({ title, id, poster_path }) =>
                        <li key={id}>
                            <NavLink to={`movies/${id}`} state={{from: location}}>
                                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                                <Title>{title}</Title>
                            </NavLink>
                        </li>
                    )}
                </List>)}
            {isLoading && <Loader />}
        </>
    );
};
