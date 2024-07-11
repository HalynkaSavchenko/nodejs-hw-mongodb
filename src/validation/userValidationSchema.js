import Joi from 'joi';
import { emailRegex } from '../constants/contacts-constants.js';
import { passwordRegex } from '../constants/users-constants.js';

const passwordErrorMessage = 'Пароль повинен містити принаймні одну малу літеру, одну велику літеру, одну цифру, один спеціальний символ і бути не менше 8 символів довжиною.';
export const userSignupSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().pattern(passwordRegex).required().messages({
        'string.pattern.base': passwordErrorMessage}),
});

export const userSigninSchema = Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().pattern(passwordRegex).required().messages({
        'string.pattern.base': passwordErrorMessage}),
});
