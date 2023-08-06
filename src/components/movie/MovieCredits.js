import { tmdbAPI } from "configs/api";
import React from "react";

const MovieCredits = ({ cast }) => {
  if (!cast) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.length > 0 &&
          cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.getImageOriginal(item.profile_path)}
                alt=""
                className="w-full h-[350px] object-cover rounded-lg mb-3"
              />
              <h3 className="text-center text-xl font-medium">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieCredits;
