import createHttpError from 'http-errors';

export const emailRegex = /\S+@\S+\.\S+/;

export const emailValidator = (v) => {
  if (!emailRegex.test(v)) {
    throw createHttpError(400, `${v} is not a valid email!`);
  }
  return true;
};

export const contactsTypeList = [
    'work',
    'home',
    'personal'
];

export const contactsSchemaFields = [
  '_id',
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
  'createdAt',
  'updatedAt'
];
