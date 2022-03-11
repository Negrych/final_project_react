import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {changePage, getMovie, nextPage, previousPage} from "../store/movieSlice";
import MoviesList from "../components/MoviesList/MoviesList";
import GenrePage from "../components/GenrePage/GenrePage";
import './stylePage.css'
import '../components/MoviesList/bootstrap-grid.css'
import './media.css'
import {getGenre} from "../store/genreSlice";
import Header from "../components/Header/Header";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const {movies, pages,check,filtred,arrPages} = useSelector(state => state.moviesReducer);
    const {genre: {genres}} = useSelector(state => state.genreReducer)
    const obj = useSelector(state => state.moviesReducer)
    useEffect(() => {
        dispatch(getMovie(pages))
        dispatch(getGenre())
    }, [dispatch, pages])


    return (
      <div>
          <Header/>
          <div className={'row'}>
             <div className={'col-xl-2 col-lg-2 col-sm-10 col-md-10'}>
                 <GenrePage genres={genres}/>
             </div>
              <div className={'container col-xl-9 col-lg-9 col-md-9 col-sm-5'}>
                  <div className={'row'}>
                      {(movies.results && !check.length) && movies.results.map((value, index) => <MoviesList key={index}
                                                                                                             movies={value}
                                                                                                             genres={genres}/>
                      )}

                  </div>
                  <div className={'row'}>
                      {(filtred.length && check.length ) ? filtred.map((value, index) => <MoviesList key={index}
                                                                                                     movies={value}
                                                                                                     genres={genres}/>
                      ) :''}
                  </div>
                  <div className={'row'}>
                      {(!filtred.length && check.length ) ?  <div>На даній сторінці інформації по заданим критеріям немає</div> : ''}
                  </div>

                  <div className={'page'}>
                      {arrPages[0] !==1 && <button className={'changePage'}  onClick={() => dispatch(previousPage())}>previous page</button>}
                      {arrPages.map((value,index)=><button key={index} value={value} onClick={()=>dispatch(changePage(value))}>{value}</button>)}
                      {arrPages[9] !==500 && <button className={'changePage'}  onClick={() => dispatch(nextPage())}>Next</button>}
                      <div className={'myPage'}>{obj.pages}</div>
                  </div>
              </div>
          </div>

      </div>
    );
};

export default MoviesPage;