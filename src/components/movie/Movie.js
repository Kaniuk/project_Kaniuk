import React from 'react';
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {useSelector} from "react-redux";

import {imageBaseURL} from "../../configs";
import './Movie.css';


const Movie = ({movie}) => {
    const {genres} = useSelector(state => state.genresReducer);

    const {title, id, backdrop_path, release_date, popularity, vote_average, genre_ids} = movie;
    const movieGenre = genre_ids.map((id) => genres.find((genre) => id === genre.id));

    return (
        <div className="movie">
            <div className="description">
                <h2>{title}</h2>
            </div>
            <Link to={`/movies/${id}`}>
                <img src={`${imageBaseURL}${backdrop_path}`} alt="backdrop"/>
            </Link>
            <div className="info">
                <div>release:{release_date}</div>
                <div className="stars_rating">rating:<ReactStars activeColor="yellow" size={20} count={5}
                                                                 value={vote_average / 2} isHalf>
                </ReactStars>
                </div>
                <div>popularity:{popularity}</div>
            </div>
            <div className="item">
                {movieGenre.map(movie =>
                    <div className="notify-badge" key={movie.id}>{movie.name}</div>
                )}</div>
        </div>
    );
};


export {Movie};