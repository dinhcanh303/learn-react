export const searchMovieApi = (query, nextPage) => {
  return `https://api.themoviedb.org/3`;
};
export const pathImage = "https://image.tmdb.org/t/p/original/";
const tmdbEndPoint = "https://api.themoviedb.org/3/";
export const tmdbAPI = {
  getMovieList: (typeOrMovieId, collection = "", nextPage = false) => {
    if (collection) collection = "/" + collection;
    return `${tmdbEndPoint}movie/${typeOrMovieId}${collection}?api_key=69fe6053ab2b06475da63a7f3438599f${
      nextPage ? `&page=${nextPage}` : ""
    }`;
  },
  getMovieListBySearch: (query, nextPage) =>
    `${tmdbEndPoint}/search/movie?api_key=69fe6053ab2b06475da63a7f3438599f&query=${query}&page=${nextPage}`,
  getImageOriginal: (url) => `${pathImage}${url}`,
};
