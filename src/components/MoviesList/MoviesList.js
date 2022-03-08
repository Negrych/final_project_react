import React from 'react';
import {Link} from "react-router-dom";

import {urlImg} from "../../confirm/confirm";
import './movieListStyle.css';

const MoviesList = (props) => {
  const {movies, movies: {genre_ids,vote_average}, genres} = props;
    let movieGenres;
    if (genres) {
        movieGenres = genres.filter((genre) => genre_ids.includes(genre.id));
    }
    return (
        <div className={'listWrap'}>
            <p className={'title'}>{movies.original_title}</p>
            <div className={'imgTitle'}><img src={urlImg + movies.backdrop_path} alt="backdrop_path"/></div>
            <div className={'wrapGenres'}>{movieGenres && movieGenres.map((movie, index) => <div key={index}>{movie.name}</div>)}</div>
            <div className={'rating'}>
                <div className={'ratingBody'}>
                    <div className={`ratingActive`} style={{width:`${vote_average*10}%`}}> </div>
                </div>
                <div className={'ratingValue'}>{vote_average}</div>
            </div>
            <div className={'wrapBtnDetails'}><Link to={'/detailsPage'} state={movies}><button className={'btnDetails'}>Details</button></Link></div>
        </div>
    );
};

export default MoviesList;