import React from 'react';
import MoviesPage from "./containers/MoviesPage";
import {Route, Routes} from "react-router-dom";

import DetailsPage from "./containers/DetailsPage";
import './App.css'
import Autorisation from "./components/Autorisation/Autorisation";
const App = () => {
    return (
        <div className={'backgroundImg'}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/detailsPage'} element={<DetailsPage/>}/>
                <Route path={'/autorization'} element={<Autorisation/>}/>
            </Routes>
        </div>
    );
};

export default App;