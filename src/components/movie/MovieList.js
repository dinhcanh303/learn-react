import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../configs/config";
import { tmdbAPI } from "../../configs/api";
const MovieList = ({
  type = "now_playing",
  collection = "",
  vertical = false,
}) => {
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(type, collection),
    fetcher
  );

  if (isLoading)
    return (
      <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
    );
  if (error) return <div>Error</div>;
  const movies = data?.results || [];
  return (
    <>
      {vertical ? (
        <div className="grid grid-cols-4 gap-10">
          {!isLoading &&
            movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      ) : (
        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={true}>
            {!isLoading &&
              movies.length > 0 &&
              movies.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MovieList;
