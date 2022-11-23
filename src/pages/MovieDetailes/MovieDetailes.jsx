import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "services/api";
import { BiArrowBack } from "react-icons/bi";
import { Box } from "components/Box/Box";
import Loader from "components/Loader/Loader";


export default function MovieDetailes() {

    const { movieId } = useParams();
    const location = useLocation();

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovieById = async () => {
            setIsLoading(true);
            const data = await getMovieById(movieId);
            setMovie(data);
            setIsLoading(false);
        };

        fetchMovieById();
    }, [movieId]);

    
    return (
        <main>
            {movie && (
                <>
                    <NavLink to={location.state.from}><BiArrowBack size={30} /> Повернутися</NavLink>
                    <Box display="flex">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                        <Box pt={4} ml={4}>
                            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                            <p>Оцінка глядачів: {String(movie.vote_average).slice(0, 3)}</p>
                            <h3>Опис</h3>
                            <p>{movie.overview}</p>
                            <h3>Жанр</h3>
                            <p>{movie.genres.map(({name}) => name).join(", ")}</p>
                        </Box>
                    </Box>
                    <Box mt={4}>
                        <h3>Додаткова інформація</h3>  
                        <ul>
                            <li><NavLink to={`cast`}>Актори</NavLink></li>
                            <li><NavLink to={`reviews`}>Рецензії</NavLink></li>
                        </ul>
                    </Box>
                    <Outlet />
                </>
            )}
            {isLoading && <Loader />}
        </main>
    );
};
