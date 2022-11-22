import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/api";
import Loader from "components/Loader/Loader";
import CastList from "components/Cast/CastList/CastList";

export default function Cast() {

    const { movieId } = useParams();
    
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
            setIsLoading(true);
            const data = await getCastById(movieId);
            setCast(data.cast);
            setIsLoading(false);
        };
        
        fetchCast();
    }, [movieId]);

    return (
        <div>
            {cast && (
                <CastList cast={cast} />)
            }
            {isLoading && <Loader />}
        </div>
    );
};
