import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { getReviewsById } from "services/api";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import Loader from "components/Loader/Loader";

export default function Reviews() {

    const { movieId } = useParams();
    
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            const data = await getReviewsById(movieId);
            setReviews(data);
            setIsLoading(false);
        };

        fetchReviews();
    }, [movieId]);

    if (!reviews) return;
    const { results } = reviews;

    return (
        <div>
            {results.length > 0
                ? <ReviewsItem reviews={results} />
                : <p>Вибачте, по цьому фільму ще не має рецензій</p>}
            {isLoading && <Loader />}
        </div>
    );
};
