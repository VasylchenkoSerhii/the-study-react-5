import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import { useLocation } from "react-router-dom";
import { Title, List, ListItem, Link } from "./TrendingList.styled";
import defaultImage from "../../img/default-poster.jpg";
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
                        <ListItem key={id}>
                            <Link to={`movies/${id}`} state={{ from: location }}>
                                {poster_path
                                    ? <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                                : <img src={defaultImage} alt={title} />}
                                
                                <Title>{title}</Title>
                            </Link>
                        </ListItem>
                    )}
                </List>)}
            {isLoading && <Loader />}
        </>
    );
};
