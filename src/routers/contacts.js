import { Router } from 'express';
import { contactCreateSchema, contactUpdateSchema } from '../validation/contactValidationSchema.js';
import { getAllContactsController, getContactByIdController, createContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import authenticate from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';


const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post('/', upload.single('photo'), validateBody(contactCreateSchema), ctrlWrapper(createContactController));

// contactsRouter.put('/:contactId', isValidId, validateBody(contactCreateSchema), ctrlWrapper(upsertContactController));

contactsRouter.patch('/:contactId', upload.single('photo'), isValidId, validateBody(contactUpdateSchema), ctrlWrapper(patchContactController));

contactsRouter.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));


export default contactsRouter;
