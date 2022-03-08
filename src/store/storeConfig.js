import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import genreReducer from "./genreSlice";


const store = configureStore({
    reducer:{
        moviesReducer:moviesReducer,
        genreReducer:genreReducer
    }
})
export default store;