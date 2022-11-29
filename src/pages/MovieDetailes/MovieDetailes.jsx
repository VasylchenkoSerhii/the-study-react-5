import { Suspense, useEffect, useState } from "react";
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
    LinkInformation,
    AdditionalTitle
} from "./MovieDetailes.styled";
import defaultImage from "../../img/default-poster.jpg";
import Loader from "components/Loader/Loader";


export default function MovieDetailes() {

    const { movieId } = useParams();
    const location = useLocation();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieById = async () => {
            const data = await getMovieById(movieId);
            setMovie(data);
        };

        fetchMovieById();
    }, [movieId]);

    if (!movie) {
        return;
    };

    const { poster_path, title, vote_average, overview, genres, release_date } = movie;
    const movieOverview = overview === "" ? "Дуже скоро з'явиться опис" : overview;
    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultImage;
    const backLinkHref = location.state?.from ?? "/movies";
    
    return (
        <Box as="main" pt={5}>
            {movie && (
                <>
                    <Link to={backLinkHref}><BiArrowBack size={30} /> Повернутися</Link>
                    <WripperCard>
                        <img src={imgSrc} alt={title} />
                        <WripperDescription>
                            <TitleMovie>{title} ({release_date.slice(0, 4)})</TitleMovie>
                            <Grade>Оцінка глядачів: <GradeAccent>{String(vote_average).slice(0, 3)}</GradeAccent></Grade>
                            <Title>Опис</Title>
                            <Overview>{movieOverview}</Overview>
                            <Title>Жанр</Title>
                            <p>{genres.map(({ name }) => name).join(", ")}</p>
                        </WripperDescription>
                    </WripperCard>
                    <AdditionalInformation>
                        <AdditionalTitle>Додаткова інформація</AdditionalTitle>
                        <Box
                            display="flex"
                            justifyContent="space-evenly"
                        >
                            <li><LinkInformation to="cast" state={{ from: backLinkHref }}>Актори</LinkInformation></li>
                            <li><LinkInformation to="reviews" state={{ from: backLinkHref }}>Рецензії</LinkInformation></li>
                        </Box>
                    </AdditionalInformation>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </>
            )}
        </Box>
    );
};

