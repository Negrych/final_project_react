import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validator/validator";
import {useDispatch, useSelector} from "react-redux";

import '../MovieInfo/movieInfoStyle.css'
import './registration.css'
import  {autorization} from "../../store/movieSlice";

const Registration = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm({resolver:joiResolver(userValidator),mode:'onTouched'})
    let dispatch = useDispatch()
    let obj = useSelector(state => state.moviesReducer)

    function submit(data){
        let usersJSON = localStorage.getItem('users')
        if (usersJSON === null){
            dispatch(autorization({noUser:null,messg:'Ви успішно зареєструвалисб поверніться на сторінку авторизації щоб увійти'}))
            localStorage.setItem('users', JSON.stringify([data]));
        }else if (usersJSON != null){
            dispatch(autorization({messg:'Ви вже зареєстовані зайдіть в localStorage щоб згадати дані та поверністься на сторінку авторизації щоб увійти',user:null}))
        }
        reset()
    }
return (
        <div className={'formWrap'}>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label> Enter your name <input type="text" defaultValue={''} {...register('userName')}/></label>
                    {errors.userName && <span>{errors.userName.message}</span>}
                </div>
                <div>
                    <label> Enter your email <input type="email" defaultValue={''} {...register('email')}/></label>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label> Enter Password <input type="password" defaultValue={''} {...register('password')}/></label>

                </div>
                <button>register</button>
            </form>
           <div className={'messg'}> {obj.messg && <h2>{obj.messg}</h2>} </div>
            <div className={'previewBtn'}><Link to={'/autorization'} ><button className={'btnDetails'}>preview</button></Link></div>
        </div>
    );
};

export default Registration;