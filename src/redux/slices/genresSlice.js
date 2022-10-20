import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();

            return data.genres;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const genresSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })

});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {
    getGenres
};

export {
    genresReducer,
    genresActions
};