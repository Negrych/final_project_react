import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovie, nextPage, previousPage} from "../store/movieSlice";
import MoviesList from "../components/MoviesList/MoviesList";
import GenrePage from "../components/GenrePage/GenrePage";
import './stylePage.css'
import './media.css'
import {getGenre} from "../store/genreSlice";
import Header from "../components/Header/Header";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const {movies, pages,check,filtred} = useSelector(state => state.moviesReducer);
    const {genre: {genres}} = useSelector(state => state.genreReducer)

    useEffect(() => {
        dispatch(getMovie(pages))
        dispatch(getGenre())
    }, [dispatch, pages])


    return (
      <div>
          <Header/>
          <div className={'titleWrap'}>
              <div>
                  <GenrePage genres={genres}/>
              </div>
              <div className={'wrapList'}>
                  {(movies.results && !check.length) && movies.results.map((value, index) => <MoviesList key={index}
                                                                                                         movies={value}
                                                                                                         genres={genres}/>
                  )}

                  {(filtred.length && check.length ) ? filtred.map((value, index) => <MoviesList key={index}
                                                                                                 movies={value}
                                                                                                 genres={genres}/>
                  ) :''}
                  {(!filtred.length && check.length ) ?  <div>На даній сторінці інформації по заданим критеріям немає</div> : ''}

                  <div className={'wrapBtn'}>
                      {pages<500 && <button className={'changePage'} onClick={() => dispatch(nextPage())}>Next</button>}
                      {pages>1 && <button className={'changePage'} onClick={() => dispatch(previousPage())}>previous page</button>}
                  </div>
              </div>
          </div>
      </div>
    );
};

export default MoviesPage;