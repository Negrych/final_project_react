import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import '../MovieInfo/movieInfoStyle.css'
import './autorization.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validator/validator";

const Autorisation = () => {
    const {register,handleSubmit,watch,formState:{errors}} = useForm({resolver:joiResolver(userValidator),mode:'onTouched'})

    function submit(data){
        console.log(errors);
        console.log(data);
    }
    //watch(e=>console.log(e))

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


            <div className={'previewBtn'}><Link to={'/'} ><button className={'btnDetails'}>preview</button></Link></div>
        </div>
    );
};

export default Autorisation;