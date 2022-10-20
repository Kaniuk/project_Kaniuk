import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {useQuery} from "../../hooks";
import {moviesActions} from "../../redux";
import {Movie} from "../movie/Movie";
import './Movies.css';

const Movies = () => {
    const {movies, total_pages, loading, error} = useSelector((state) => state.moviesReducer);
    const dispatch = useDispatch();
    const {page = 1} = useParams();
    const query = useQuery();

    const genre = query.get('genre');

    useEffect(() => {
        dispatch(moviesActions.getMovies({page, with_genres: genre}));
        window.scrollTo(0, 0);
    }, [page,genre]);

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            <div className="movies">
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>

            <div className="nextPrevButtons">
                {page > 1 && <Link to={`/movies/page-${+page - 1}`}>
                    <button>PREVIOUS</button>
                </Link>}
                {page < total_pages && <Link to={`/movies/page-${+page + 1}`}>
                    <button>NEXT</button>
                </Link>}
                <button onClick={() => window.scrollTo(0, 0)} className="rounded_button">up</button>
            </div>
        </div>
    );
};

export {Movies};