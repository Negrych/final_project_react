import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {filterMovie} from "../../store/movieSlice";
import './genreStyle.css'
const GenrePage = ({genres}) => {
    const {check} = useSelector(state => state.moviesReducer)

    const dispatch = useDispatch()
    function checked(e) {
        dispatch(filterMovie({data: e.target.value}))
    }

    function clickMobile(){
        let mobileMenu = document.getElementById('mobileMenu')
        mobileMenu.classList.add('close')
        let btnClose = document.getElementById('btnClose')
        btnClose.classList.remove('close')
        let genreWrapMobile = document.getElementById('genreWrapMobile')
        genreWrapMobile.classList.add('block')
    }

    function clickClose(){
        let mobileMenu = document.getElementById('mobileMenu')
        mobileMenu.classList.remove('close')
        let btnClose = document.getElementById('btnClose')
        btnClose.classList.add('close')
        let genreWrapMobile = document.getElementById('genreWrapMobile')
        genreWrapMobile.classList.remove('block')
    }
    return (
       <div>
           <div className="wrapMenu"  onClick={()=>clickMobile()}>
               <div className="wrapMenu_line" id={'mobileMenu'}>
               </div>
           </div>

           <div className={'genreWrapMobile'} id={'genreWrapMobile'}>
               <div className={'btnClose close'} id={'btnClose'} onClick={()=>clickClose()}>
                   <div className={'firstLine'}> </div>
                   <div className={'secondLine'}> </div>
               </div>

               {genres && genres.map((value, index) =>
                   <div key={index} className={'genreItem'}>
                       <input type="checkbox" checked={check.includes(value.id.toString()) ? 'checked' : ''}  onChange={checked} value={value.id}/> {value.name}
                   </div>)}
           </div>
           <div className={'genreWrap'} id={'genreWrap'}>
               {genres && genres.map((value, index) =>
                   <div key={index} className={'genreItem'}>
                       <input type="checkbox" checked={check.includes(value.id.toString()) ? 'checked' : ''}  onChange={checked} value={value.id}/> {value.name}
                   </div>)}
           </div>
       </div>
    );
};

export default GenrePage;