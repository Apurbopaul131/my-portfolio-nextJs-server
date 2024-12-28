import express from 'express';
import auth from '../../middlewires/auth';
import validateRequest from '../../middlewires/validateRequest';
import { USER_ROLE } from '../User/user.constant';

import { BlogControllers } from './blog.controller';
import { BlogValidations } from './blog.validation';

const router = express.Router();
router.post(
  '/blogs',
  auth(USER_ROLE.user),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);
router.patch(
  '/blogs/:id',
  auth(USER_ROLE.user),
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);
router.delete('/blogs/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);
export const BlogRoutes = router;
