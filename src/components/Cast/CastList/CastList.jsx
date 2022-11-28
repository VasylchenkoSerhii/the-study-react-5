import { List, ListItem, Wrapper } from "./CastList.styled";
import defaultImage from "../../../img/default-photo.jpg";

export default function CastList({cast}) {
  return (
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
    </List>
  );
};
