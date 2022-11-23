import TrendingList from "components/TrendingList/TrendingList";
import { Main, Title } from "./Home.styled";

export default function Home() {
    return (
        <Main>
            <Title>Фільми в тренді на сьогодні</Title>
            <TrendingList />
        </Main>
    );
};
