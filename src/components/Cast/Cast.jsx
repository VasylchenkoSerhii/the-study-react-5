import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/api";
import { List, ListItem, Wrapper } from "./Cast.styled";
import Loader from "components/Loader/Loader";
import defaultImage from "../../img/default-photo.jpg";

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
                <List>
                    {cast.map(({ character, id, name, profile_path }) => (
                        <ListItem key={id}>
                            {profile_path
                                ? <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
                                : <img src={defaultImage} alt={name} />}
                            <Wrapper>
                                <p>Ім'я: {name}</p>
                                <p>Роль: {character}</p>
                            </Wrapper>
                        </ListItem>
                    ))}
                </List>)
            }
            {isLoading && <Loader />}
        </div>
    );
};

