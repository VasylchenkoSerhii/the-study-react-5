export default function TrendingListItem({title, id}) {
    return (
        <li key={id}>
            {title}
        </li>
    );
};
