import TrendingList from "components/TrendingList/TrendingList";
import { Main } from "./Home.styled";

export default function Home() {
    return (
        <Main>
            <h1>Фільми в тренді на сьогодні</h1>
            <TrendingList />
        </Main>
    );
};
