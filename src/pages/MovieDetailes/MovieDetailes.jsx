import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "services/api";
import { BiArrowBack } from "react-icons/bi";
import { Box } from "components/Box/Box";
import {
    Link,
    WripperCard,
    WripperDescription,
    TitleMovie,
    Grade,
    GradeAccent,
    Title,
    Overview,
    AdditionalInformation,
    LinkInformation
} from "./MovieDetailes.styled";
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
    console.log(location.state)
    
    return (
        <Box as="main" pt={5}>
            {movie && (
                <>
                    <Link to={location.state?.from}><BiArrowBack size={30} /> Повернутися</Link>
                    <WripperCard>
                        <img src={imgSrc} alt={title} />
                        <WripperDescription>
                            <TitleMovie>{title} ({release_date.slice(0, 4)})</TitleMovie>
                            <Grade>Оцінка глядачів: <GradeAccent>{String(vote_average).slice(0, 3)}</GradeAccent></Grade>
                            <Title>Опис</Title>
                            <Overview>{movieOverview}</Overview>
                            <Title>Жанр</Title>
                            <p>{genres.map(({name}) => name).join(", ")}</p>
                        </WripperDescription>
                    </WripperCard>
                    <AdditionalInformation>
                        <Title>Додаткова інформація</Title>  
                        <ul>
                            <li><LinkInformation to={`cast`}>Актори</LinkInformation></li>
                            <li><LinkInformation to={`reviews`}>Рецензії</LinkInformation></li>
                        </ul>
                    </AdditionalInformation>
                    <Outlet />
                </>
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
