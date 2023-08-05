import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../configs/config";
import { getDataTheMovieDBApi } from "../../configs/api";
const MovieList = ({ typeMovie = "now_playing", vertical = false }) => {
  const { data, error, isLoading } = useSWR(getDataTheMovieDBApi(typeMovie), fetcher);

  const movies = data?.results || [];
  return vertical ? (
    <div className="grid grid-cols-4 gap-10">
      {movies.length > 0 &&
        movies.map((item) => <MovieCard key={item.id} item={item}></MovieCard>)}
    </div>
  ) : (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={true}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
