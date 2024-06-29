import { contactsTypeList } from "../constants/contacts-constants.js";

const parseBoolean = value => {
    if(typeof value !== 'string') return;

    if(!['true', 'false'].includes(value)) return;

    const parsedValue = Boolean(value);
    return parsedValue;
};

export const parseContactFilterParams = ({contactType, isFavourite}) => {
    const parsedType = contactsTypeList.includes(contactType) ? contactType : null;

    const parsedIsFavourite = parseBoolean(isFavourite);

    return {
        contactType: parsedType,
        isFavourite: parsedIsFavourite,
    };
};
