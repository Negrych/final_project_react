import React from 'react';
import {urlImg} from "../../confirm/confirm";
import {Link} from "react-router-dom";

import './movieInfoStyle.css'
import '../../containers/media.css'
import '../MoviesList/bootstrap-grid.css'

const MovieInfo = ({data:{state}}) => {
    return (
        <div className={'row'}>
            <div className={'wrapInfo  '}>
                <div className={'img col-xl-6   col-lg-5    col-md-6    col-sm-6'}><img src={urlImg+state.poster_path} alt=""/></div>
                <div className={'descrWrap col-xl-6   col-lg-5    col-md-6    col-sm-6'}>
                    <div className={'title'}>{state.original_title}</div>
                    <div className={'descr'}>{state.overview}</div>
                    <div className={'releaseData'}> Release data: {state.release_date}</div>
                    <div className={'previewBtn'}><Link to={'/'} ><button className={'btnDetails'}>preview</button></Link></div>
                </div>

            </div>
        </div>
    );
};

export default MovieInfo;