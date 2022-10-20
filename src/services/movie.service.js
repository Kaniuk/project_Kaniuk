import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getMovies: (params) => axiosService.get(urls.movies,{params}),
    getMovieById: (id) => axiosService.get(`${urls.movie}/${id}`),
    getGenres: () => axiosService.get(urls.genres),
    searchMovies: (params) => axiosService.get(urls.search, {params})
};

export {
    movieService
};