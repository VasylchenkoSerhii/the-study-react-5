import { Box } from "components/Box/Box";
import { useState, useEffect } from "react";
import { getTrending } from "services/api";
import TrendingListItem from "./TrendingListItem/TrendingListItem";

export default function TrendingList() {

    const [trending, setTranding] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getTrending();
            setTranding(movies.results)
        };
        fetchMovies()
    }, []);

    return (
        <Box as="ul">
            {trending.map(({title, id}) => <TrendingListItem title={title} id={id} />)}
        </Box>
    );
};
