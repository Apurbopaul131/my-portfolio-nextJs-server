import express from 'express';
import auth from '../../middlewires/auth';
import { USER_ROLE } from '../User/user.constant';
import { AdminControllers } from './admin.controller';

const router = express.Router();
router.patch(
  '/admin/users/:userId/block',
  auth(USER_ROLE.admin),
  AdminControllers.blockedUserByAdmin,
);

export const AdminRoutes = router;
