import React from "react";

const MovieVideos = ({ movies = [] }) => {
  if (!movies || movies.length <= 0) return null;
  return (
    <>
      <div className="flex flex-col gap-10">
        {movies.slice(0, 2).map((item) => (
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieVideos;
