import { useLocation } from "react-router-dom";
import { Title, List, ListItem, Link } from "./MoviesList.styled";
import defaultImage from "../../img/default-poster.jpg";


export default function TrendingList({movies}) {

    const location = useLocation();

    return (
        <>
            {movies.length > 0 && (
                <List>
                    {movies.map(({ title, id, poster_path }) =>
                        <ListItem key={id}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                {poster_path
                                    ? <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                                : <img src={defaultImage} alt={title} />}
                                
                                <Title>{title}</Title>
                            </Link>
                        </ListItem>
                    )}
                </List>)}
        </>
    );
};
