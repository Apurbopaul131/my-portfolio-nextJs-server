import express from 'express';
import auth from '../../middlewires/auth';
import { USER_ROLE } from '../User/user.constant';
import { AdminControllers } from './admin.controller';

const router = express.Router();
//user blocked by update route
router.patch(
  '/admin/users/:userId/block',
  auth(USER_ROLE.admin),
  AdminControllers.blockedUserByAdmin,
);
//user delete by delete route
router.delete(
  '/admin/blogs/:id',
  auth(USER_ROLE.admin),
  AdminControllers.deletedBlogByAdmin,
);
export const AdminRoutes = router;
