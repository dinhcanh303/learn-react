import React from "react";
import { pathImage } from "../../configs/api";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, vote_average, release_date, poster_path, id } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`${pathImage}${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} type="primary">
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
