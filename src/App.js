import { Fragment } from "react";
import "swiper/scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <HomePage></HomePage>
                /* <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </> */
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
