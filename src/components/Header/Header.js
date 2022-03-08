import React from 'react';
import {Link} from "react-router-dom";

import './headerStyle.css'
const Header = () => {
    return (
        <div className={'headerWrap'}>
            <div className={'logo'}> Raymov </div>
            <div className={'loginWrap'}>
                <div className={'login'}><Link to={'/autorization'}><button>Sign In</button></Link></div>
            </div>
        </div>
    );
};

export default Header;