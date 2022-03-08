import React from 'react';
import MovieInfo from "../components/MovieInfo/MovieInfo";
import {useLocation} from "react-router-dom";
import Header from "../components/Header/Header";

const DetailsPage = () => {
    const location = useLocation()
    return (
        <div>
            <Header/>
            <MovieInfo data={location}/>
        </div>
    );
};

export default DetailsPage;