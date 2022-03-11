import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {loginValidator} from "../../validator/validator";
import './autorization.css'
import {autorization} from "../../store/movieSlice";

const Autorization = () => {
    const obj=useSelector(state => state.moviesReducer)
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:joiResolver(loginValidator),mode:'onTouched'})
    const dispatch=useDispatch()

    function submit(data){
        let usersJSON = localStorage.getItem('users');
        let parse = JSON.parse(usersJSON);
        parse !== null  ? parse.map(function (storage){
            if (storage.userName === data.userName && storage.password===data.password){
              return   dispatch(autorization({user:storage,noUser:null}))
            }else  {
               return  dispatch(autorization({noUser:'Дані введено не вірно перейдіть в localstorage щоб пригадати дані',user:null}))
            }
        }):dispatch(autorization({noUser:'Ви не зареєстовані',user:null}))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label> Enter your name <input type="text" defaultValue={''} {...register('userName')}/></label>
                    {errors.userName && <span>{errors.userName.message}</span>}
                </div>
                <div>
                    <label> Enter Password <input type="password" defaultValue={''} {...register('password')}/></label>
                </div>
                <button>Login In</button>
            </form>

            <div className={'previewBtn btnWrap'}>
                {obj.user && <h2 className={'goMain'}>Привіт {obj.user.userName} ви успішно авторизувались Перейдіть на головну сторінку  <div><Link to={'/'} ><button>На головну</button></Link></div></h2>}
                { obj.user === null  &&
                <div>
                    {obj.noUser !== null && <h2>{obj.noUser}</h2>}
                    <div className={'msgNoAcaunt'}> Якщо ви не маєте акаунта ви можете зареєструватись</div>
                    <div className={'registration'}><Link to={'/registration'}><button>Registration</button></Link></div>
                    <div><Link to={'/'} ><button className={'btnDetails'}>preview</button></Link></div>
                </div>
                }
            </div>
        </div>
    );
};

export default Autorization;
