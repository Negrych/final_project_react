import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {dataService} from "../service/axiosService/movieAndGenreService";


export const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async (page,{rejectedWithValue})=>{
        try {
            const movies = await dataService.getMovies(page);
            return movies
        }catch (e) {
            return  rejectedWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState:{
        filtred:[],
        movies:[],
        check:[],
        status:null,
        error:null,
        pages:1
    },
    reducers:{
        nextPage:(state) => {
            state.pages=state.pages+1
            state.check=[]
        },
        filterMovie:(state, action) => {
            let index = state.check.indexOf(action.payload.data)
            if(index !== -1){
                state.check.splice(index,1)
            }else {
                state.check.push(action.payload.data)
            }

            let result = state.movies.results.filter(movie => state.check.every(tag => movie.genre_ids.includes(+tag)));
            state.filtred=result
        },

        previousPage:((state) => {
            state.pages= state.pages-1
            state.check=[]
        })

    },
    extraReducers:{
        [getMovie.pending]:(state)=>{
            state.status = 'pending'
            state.error = null
        },
        [getMovie.fulfilled]:(state,action)=>{
            state.status = 'fulfiled'
            state.movies = action.payload
        },
        [getMovie.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const moviesReducer=movieSlice.reducer;
export default moviesReducer;

export const{nextPage,previousPage,filterMovie}=movieSlice.actions