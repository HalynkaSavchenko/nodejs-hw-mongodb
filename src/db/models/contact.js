import { model, Schema } from 'mongoose';
import { contactsTypeList, emailValidator } from '../../constants/contacts-constants.js';
import { mongooseSaveError, setUpdateSettings } from './hooks.js';

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required:[ true, 'Name is required!'],
        },
        phoneNumber: {
            type: String,
            required:[ true, 'Phone number is required!'],
        },
        email: {
            type: String,
            validate: emailValidator,
            required: false
        },
        isFavourite: {
            type: Boolean,
            default: false
        },
        contactType: {
            type: String,
            enum: contactsTypeList,
            required: true,
            default: 'personal'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

contactsSchema.post('save', mongooseSaveError);

contactsSchema.pre('findOneAndUpdate', setUpdateSettings);

contactsSchema.post('findOneAndUpdate', mongooseSaveError);

export const ContactsCollection = model('contacts', contactsSchema);
