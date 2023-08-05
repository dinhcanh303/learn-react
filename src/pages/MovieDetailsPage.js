import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../configs/config";
import {
  getDataTheMovieDBApi,
  getMovieCreditsApi,
  getMovieVideosApi,
  pathImage,
} from "../configs/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useSWR(
    getDataTheMovieDBApi(movieId),
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
              backgroundImage: `url(${pathImage}${backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="w-full h-[400px] max-w-[900px] mx-auto -mt-[200px] relative z-10 pb-10">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={`${pathImage}${poster_path}`}
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
          <MovieCredits></MovieCredits>
          <MovieVideos></MovieVideos>
          <MovieSimilar></MovieSimilar>
        </div>
      </div>
    </>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data, error, isLoading } = useSWR(
    getMovieCreditsApi(movieId),
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.length > 0 &&
          cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={`${pathImage}${item.profile_path}`}
                alt=""
                className="w-full h-[350px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-center text-xl font-medium">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
function MovieVideos() {
  const { movieId } = useParams();
  const { data, error, isLoading } = useSWR(
    getMovieVideosApi(movieId),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(data);
  return (
    <>
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div key={item.id}>
            <h3 className="mb-5 text-xl font-medium inline-block bg-secondary p-3">
              {item.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width="1189"
                height="669"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="Barbie - The Kens - Warner Bros. UK &amp; Ireland"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function MovieSimilar() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
    </div>
  );
}

export default MovieDetailsPage;
