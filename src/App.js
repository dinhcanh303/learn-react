import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

//Splitting Routes lazy load
//Advanced react pattern
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
              <Route
                path="/movie/:movieId"
                element={<MovieDetailsPage></MovieDetailsPage>}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
