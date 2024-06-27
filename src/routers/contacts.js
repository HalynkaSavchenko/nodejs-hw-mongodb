import { Router } from 'express';
import { getAllContactsController, getContactByIdController, createContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactCreateSchema, contactUpdateSchema } from '../validation/contactValidationSchema.js';


const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post('/', validateBody(contactCreateSchema), ctrlWrapper(createContactController));

// contactsRouter.put('/:contactId', isValidId, validateBody(contactCreateSchema), ctrlWrapper(upsertContactController));

contactsRouter.patch('/:contactId', isValidId, validateBody(contactUpdateSchema), ctrlWrapper(patchContactController));

contactsRouter.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));


export default contactsRouter;
