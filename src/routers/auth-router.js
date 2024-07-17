import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userSignupSchema, userSigninSchema, requestResetEmailSchema } from '../validation/userValidationSchema.js';
import { refreshController, requestResetEmailController, signinController, signoutController, signupController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/register', validateBody(userSignupSchema), ctrlWrapper(signupController));

authRouter.post('/login', validateBody(userSigninSchema), ctrlWrapper(signinController));

authRouter.post('/refresh', ctrlWrapper(refreshController));

authRouter.post('/logout', ctrlWrapper(signoutController));

authRouter.post('/send-reset-email', validateBody(requestResetEmailSchema), ctrlWrapper(requestResetEmailController));

export default authRouter;
