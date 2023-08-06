import React from "react";
import MovieList from "./MovieList";

const MovieSimilar = ({ movieId }) => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
      <MovieList type={movieId} collection="similar"></MovieList>
    </div>
  );
};

export default MovieSimilar;
