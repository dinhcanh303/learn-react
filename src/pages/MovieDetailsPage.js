import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../configs/config";
import { tmdbAPI } from "../configs/api";
import MovieVideos from "components/movie/MovieVideos";
import MovieCredits from "components/movie/MovieCredits";
import MovieSimilar from "components/movie/MovieSimilar";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(movieId),
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="py-10">
        <div className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-back bg-opacity-70"></div>
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${tmdbAPI.getImageOriginal(
                backdrop_path
              )})`,
            }}
          ></div>
        </div>
        <div className="w-full h-[400px] max-w-[900px] mx-auto -mt-[200px] relative z-10 pb-10">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={tmdbAPI.getImageOriginal(poster_path)}
            alt=""
          />
        </div>
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          {title}
        </h1>
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {genres.length > 0 &&
            genres.map((item) => (
              <span
                className="py-2 px-4 border border-primary rounded text-primary"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
        </div>
        <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
          {overview}
        </p>
        <div className="mx-10">
          <MovieMeta type="credits"></MovieMeta>
          <MovieMeta type="videos"></MovieMeta>
          <MovieMeta type="similar"></MovieMeta>
        </div>
      </div>
    </>
  );
};
function MovieMeta({ type = "videos" }) {
  const { movieId } = useParams();
  const { data, error, isLoading } = useSWR(
    tmdbAPI.getMovieList(movieId, type),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  switch (type) {
    case "videos":
      return (
        <MovieVideos
          movies={results}
          isLoading={isLoading}
          error={error}
        ></MovieVideos>
      );
    case "credits":
      return <MovieCredits cast={results}></MovieCredits>;
    case "similar":
      return <MovieSimilar movieId={movieId}></MovieSimilar>;
    default:
      break;
  }
}

export default MovieDetailsPage;
