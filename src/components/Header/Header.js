import React from 'react';
import {Link} from "react-router-dom";

import './headerStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {exitUser} from "../../store/movieSlice";

const Header = () => {
    const obj=useSelector(state => state.moviesReducer)
    const dispatch = useDispatch()
    function exit(){
        dispatch(exitUser())
    }
    return (
        <div className={'headerWrap'}>
            {obj.user && <h2>Привіт {obj.user.userName}</h2>}
            <div className={'logo'}> Raymov </div>
            <div className={'loginWrap'}>
                {obj.user === null && <div className={'login'}><Link to={'/autorization'}><button>Sign In</button></Link></div>}
                {obj.user !== null && <div className={'login'}><button onClick={()=>exit()}>Exit</button></div>}
            </div>
        </div>
    );
};

export default Header;