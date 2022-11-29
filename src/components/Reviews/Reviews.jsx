import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { getReviewsById } from "services/api";
import { Item, Name, NameAccent } from "./Reviews.styled";
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
                ? (<ul>
                    {results.map(({ id, author, content }) => (
                        <Item key={id}>
                            <Name>Автор: <NameAccent>{author}</NameAccent></Name>
                            <p>{content}</p>
                        </Item>))}
                </ul>)
                : <p>Вибачте, по цьому фільму ще не має рецензій</p>}
            {isLoading && <Loader />}
        </div>
    );
};
