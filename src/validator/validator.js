import Joi from "joi";

export const userValidator = Joi.object({
    userName:Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ]{1,20}$')).required(),
    email:Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ@.0-9]{1,20}$')).required(),
    password:Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ.0-9]{1,20}$')).required()
})

export const loginValidator = Joi.object({
    userName:Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ]{1,20}$')).required(),
    password:Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇ.0-9]{1,20}$')).required()
})
