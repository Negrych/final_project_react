import React from 'react';
import MoviesPage from "./containers/MoviesPage";
import {Route, Routes} from "react-router-dom";

import DetailsPage from "./containers/DetailsPage";
import './App.css'
import Autorization from "./components/Autorization/Autorization";
import Registration from "./components/Registration/Registration";

const App = () => {
    return (
        <div className={'backgroundImg'}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/detailsPage'} element={<DetailsPage/>}/>
                <Route path={'/autorization'} element={<Autorization/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
            </Routes>
        </div>
    );
};

export default App;