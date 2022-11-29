import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetailes = lazy(() => import("../../pages/MovieDetailes/MovieDetailes"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailes />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

