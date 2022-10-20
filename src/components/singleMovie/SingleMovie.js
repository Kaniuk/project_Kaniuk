import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";


import {singleMoviesActions} from "../../redux/slices";
import {imageBaseURL} from "../../configs";
import './SingleMovie.css';

const SingleMovie = () => {
    const dispatch = useDispatch();
    const {singleMovie, loading, error} = useSelector((state) => state.singleMovieReducer);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(singleMoviesActions.getMovieById({id}));
    }, [id]);

    if (singleMovie?.id != id) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            <div className="single-movie-block">
                <div>
                    <img src={`${imageBaseURL}${singleMovie.poster_path}`} alt="poster_path"/>
                </div>
                <div className="single-movie-right">
                    <div className="right_first">
                        <h1>{singleMovie.title}</h1>
                        <h2>{singleMovie.overview}</h2>
                    </div>
                    <div className="single-movie-genres">
                        <div>genres:</div>
                        {singleMovie.genres.map(genre => <div>{genre.name}</div>)}
                    </div>
                    <div className="single-movie-companies">
                        <div>production companies:</div>
                        {singleMovie.production_companies.map(company => <div>{company.name}</div>)}
                    </div>
                    <div>
                        <a href={singleMovie.homepage}>Homepage</a>
                    </div>
                    <div className="right_second">
                        <h3 className="stars_rating">rating : <ReactStars activeColor="yellow" size={30} count={5}
                                                                          value={singleMovie.vote_average / 2} isHalf>
                        </ReactStars>
                        </h3>
                        <div>release_date:{singleMovie.release_date}</div>
                        <div>runtime:{singleMovie.runtime}</div>
                        <div>status:{singleMovie.status}</div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate(-1)} className="back_button">BACK</button>
        </div>
    );
};

export {SingleMovie};

/*
<div>
    <div>
        <img src={`${imageBaseURL}${singleMovie.poster_path}`} alt="poster_path"/>

    </div>
    <div>genres</div>
    {singleMovie.genres.map(genre => genre.name)}
    <div>
        <div>
            <a href={singleMovie.homepage}>Homepage</a>
        </div>
    </div>
</div>*/
