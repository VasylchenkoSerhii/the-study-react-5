import { Box } from "components/Box/Box";

export default function ReviewsItem({reviews}) {
    return (
        <Box as="ul">
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p>Автор: {author}</p>
                    <p>{content}</p>
                </li>))}
        </Box>
    );
};
