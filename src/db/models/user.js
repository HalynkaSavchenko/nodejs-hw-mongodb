import { model, Schema } from 'mongoose';

import { mongooseSaveError, setUpdateSettings } from './hooks.js';
import { emailRegex } from '../../constants/contacts-constants.js';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: emailRegex,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false,
});

userSchema.post('save', mongooseSaveError);

userSchema.pre('findOneAndUpdate', setUpdateSettings);

userSchema.post('findOneAndUpdate', mongooseSaveError);

export const UsersCollection = model('user', userSchema);
