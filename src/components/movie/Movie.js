import React from 'react';
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";

import {imageBaseURL} from "../../configs";
import './Movie.css';


const Movie = ({movie}) => {
    const {title, overview, id, backdrop_path, release_date, popularity, vote_average} = movie;
    return (
        <div className="movie">
            <div className="description">
                <h2>{title}</h2>
                <h3>{overview}</h3>
            </div>
            <img src={`${imageBaseURL}${backdrop_path}`} alt="backdrop"/>
            <Link to={`/movies/${id}`}>
                <button>go to movie</button>
            </Link>
            <div className="info">
                <div>release:{release_date}</div>
                <div className="stars_rating">rating:<ReactStars activeColor="yellow" size={20} count={5}
                                                                 value={vote_average / 2} isHalf>
                </ReactStars>
                </div>
                <div>popularity:{popularity}</div>
            </div>
        </div>
    );
};

export {Movie};