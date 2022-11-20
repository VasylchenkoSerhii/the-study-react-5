import { Box } from "components/Box/Box";
import TrendingList from "components/TrendingList/TrendingList";

export default function Home() {
    return (
        <Box as="main">
            <h1>Trending today</h1>
            <TrendingList />
        </Box>
    );
};
