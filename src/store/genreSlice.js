import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {dataService} from "../service/axiosService/movieAndGenreService";

export const getGenre=createAsyncThunk(
    'genreSlice/getGenre',
    async (_,{rejectedWithValue})=>{
        try {
            const genre = await dataService.getGenre();
            return genre
        }catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name:'genreSlice',
    initialState:{
        genre:[],
        status:null,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [getGenre.pending]:(state)=>{
            state.status = 'pending'
            state.error = null
        },
        [getGenre.fulfilled]:(state,action)=>{
            state.status = 'fulfiled'
            state.genre = action.payload

        },
        [getGenre.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const genreReducer= genreSlice.reducer
export default genreReducer
