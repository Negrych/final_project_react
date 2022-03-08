import {axiosService} from "./axiosService";
import {urls} from "../../confirm/confirm";

const apiKey='&api_key=44e1f3fbdf04f83a95839e84ea09d8a5';
export const dataService = {
    getMovies:(page)=>axiosService.get(urls.movies+page+apiKey).then(value => value.data),
    getGenre:()=>axiosService.get(urls.genre+apiKey).then(value => value.data)
}