const baseURL = 'https://api.themoviedb.org';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

const urls = {
    movies: '/3/discover/movie',
    genres: '/3/genre/movie/list',
    search: '/3/search/keyword',
    movie: '/3/movie'
};


export {
    baseURL,
    urls,
    imageBaseURL
};