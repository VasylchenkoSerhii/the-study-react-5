import { NavLink } from "react-router-dom";

export default function MoviesList({ movies }) {
    return (
        <ul>
            {movies.map(({ title, id, poster_path }) => (
                <li key={id}>
                    <NavLink>
                        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
                        <p>{title}</p>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
