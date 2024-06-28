import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({page, perPage, sortBy, sortOrder}) => {
    const skip = (page - 1) * perPage;
    const items = await ContactsCollection.find().skip(skip).limit(perPage).sort({[sortBy] : sortOrder});
    const totalItems = await ContactsCollection.countDocuments();
    const {totalPages, hasNextPage, hasPrevPage} = calculatePaginationData({total: totalItems, page, perPage});
    return {
        items,
        totalItems,
        page,
        perPage,
        totalPages,
        hasNextPage,
        hasPrevPage,
    };
};

export const getContactById = async(contactId) => {
    const contact = await ContactsCollection.findById(contactId);
    return contact;
};

export const createContact = async(payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
};

export const updateContact = async(contactId, payload, options = {}) => {
    const rawContact = await ContactsCollection.findOneAndUpdate(
        {_id: contactId},
        payload,
        {
        // new: true,
        // runValidators: true,
        includeResultMetadata: true,
        ...options
    },);

    if (!rawContact || !rawContact.value) return null;

    return {
        contact: rawContact.value,
        isNew: Boolean(rawContact?.lastErrorObject?.upserted)
    };
};

export const deleteContact = async(contactId) => {
    const contact = await ContactsCollection.findOneAndDelete(
        {_id: contactId}
    );
    return contact;
};
