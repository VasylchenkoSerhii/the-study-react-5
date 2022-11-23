import { NavLink, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {

    const location = useLocation();
    
    return (
        <ul>
            {movies.map(({ title, id, poster_path }) => (
                <li key={id}>
                    <NavLink to={`${id}`} state={{from: location}}>
                        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                        <p>{title}</p>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
