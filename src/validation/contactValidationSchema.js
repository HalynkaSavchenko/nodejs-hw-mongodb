import Joi from 'joi';
import { contactsTypeList, emailRegex } from '../constants/contacts-constants.js';

export const contactCreateSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(20).pattern(emailRegex),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(3).max(20).valid(...contactsTypeList),
    userId: Joi.string().required(),
});

export const contactUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().min(3).max(20),
    email: Joi.string().min(3).max(20).pattern(emailRegex),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(3).max(20).valid(...contactsTypeList)
});
