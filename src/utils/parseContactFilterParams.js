import { contactsTypeList } from "../constants/contacts-constants.js";

const parseBoolean = (value) => {
    if (typeof value !== 'string') return null;
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    }
    return null;
  };
export const parseContactFilterParams = ({contactType, isFavourite}) => {
    const parsedType = contactsTypeList.includes(contactType) ? contactType : null;

    const parsedIsFavourite = parseBoolean(isFavourite);

    return {
        contactType: parsedType,
        isFavourite: parsedIsFavourite,
    };
};
