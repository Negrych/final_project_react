import React from 'react';
import {urlImg} from "../../confirm/confirm";

import './movieInfoStyle.css'
import '../../containers/media.css'
import {Link} from "react-router-dom";
const MovieInfo = ({data:{state}}) => {
    return (
        <div className={'wrapInfo'}>
            <div className={'img'}><img src={urlImg+state.poster_path} alt=""/></div>
            <div className={'descrWrap'}>
                <div className={'title'}>{state.original_title}</div>
                <div className={'descr'}>{state.overview}</div>
                <div className={'releaseData'}> Release data: {state.release_date}</div>
                <div className={'previewBtn'}><Link to={'/'} ><button className={'btnDetails'}>preview</button></Link></div>
            </div>

        </div>
    );
};

export default MovieInfo;