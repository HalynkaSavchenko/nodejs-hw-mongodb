import Joi from 'joi';
import { emailRegex } from '../constants/contacts-constants.js';
import { passwordRegex } from '../constants/users-constants.js';

export const userSignupSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().pattern(passwordRegex).required(),
});

export const userSigninSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().pattern(passwordRegex).required(),
});
