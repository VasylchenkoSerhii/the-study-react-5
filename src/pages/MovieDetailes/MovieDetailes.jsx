import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "services/api";
import { BiArrowBack } from "react-icons/bi";
import { Box } from "components/Box/Box";
import defaultImage from "../../img/default-poster.jpg";
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

    if (!movie) {
        return;
    };

    const { poster_path, title, vote_average, overview, genres, release_date } = movie;
    const movieOverview = overview === "" ? "Дуже скоро з'явиться опис" : overview;
    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultImage;

    
    return (
        <main>
            {movie && (
                <>
                    <NavLink to={location.state.from}><BiArrowBack size={30} /> Повернутися</NavLink>
                    <div>
                        <img src={imgSrc} alt={title} />
                        <Box pt={4} ml={4}>
                            <h2>{title} ({release_date.slice(0, 4)})</h2>
                            <p>Оцінка глядачів: {String(vote_average).slice(0, 3)}</p>
                            <h3>Опис</h3>
                            <p>{movieOverview}</p>
                            <h3>Жанр</h3>
                            <p>{genres.map(({name}) => name).join(", ")}</p>
                        </Box>
                    </div>
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
