import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, moviesReducer, singleMovieReducer} from "../slices";

const rootReducer = combineReducers({
    moviesReducer,
    singleMovieReducer,
    genresReducer
});


const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};