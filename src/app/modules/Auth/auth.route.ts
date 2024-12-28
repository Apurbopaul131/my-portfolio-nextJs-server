import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { UserValidations } from '../User/user.validation';
import { AuthControllers } from './auth.controller';
import { AuthValidations } from './auth.validation';

const router = express.Router();
router.post(
  '/auth/register',
  validateRequest(UserValidations.createUserValidationSchema),
  AuthControllers.registerUser,
);
router.post(
  '/auth/login',
  validateRequest(AuthValidations.loginUserValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
