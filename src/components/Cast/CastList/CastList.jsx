import { Box } from "components/Box/Box";

export default function CastList({cast}) {
  return (
      <Box
          as="ul"
          display="flex"
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
          columnGap={4}
          rowGap="20px"
      >
          {cast.map(({ character, id, name, profile_path }) => (
              <li key={id}>
                  {profile_path
                      ? <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                    : null}
                  
                  <p>Ім'я: {name}</p>
                  <p>Роль: {character}</p>
            </li>
        ))}
    </Box>
  )
}
