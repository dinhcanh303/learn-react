export const getDataTheMovieDBApi = (typeMovie) => {
  return `https://api.themoviedb.org/3/movie/${typeMovie}?api_key=69fe6053ab2b06475da63a7f3438599f`;
};
export const getMovieCreditsApi = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=69fe6053ab2b06475da63a7f3438599f`;
};
export const getMovieVideosApi = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=69fe6053ab2b06475da63a7f3438599f`;
};

export const pathImage = "https://image.tmdb.org/t/p/original/";
