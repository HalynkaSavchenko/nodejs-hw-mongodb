import {UsersCollection} from '../db/models/user.js';
import { hashValue } from '../utils/hash.js';

export const findUser = filter => UsersCollection.findOne(filter);

export const signup = async(data) =>{
    const {password} = data;
    const hashPassword = await hashValue(password);
    return UsersCollection.create({...data, password: hashPassword});
};
