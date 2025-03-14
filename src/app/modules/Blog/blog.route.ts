import express from 'express';
import validateRequest from '../../middlewires/validateRequest';

import { BlogControllers } from './blog.controller';
import { BlogValidations } from './blog.validation';

const router = express.Router();
//create blog route
router.post(
  '/dashboard/blogs',
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);
//update blog route
router.patch(
  '/dashboard/blogs/:id',
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);
//dlelete blog route
router.delete('/dashboard/blogs/:id', BlogControllers.deleteBlog);
router.get(
  '/dashboard/blogs/user-specific/:email',
  BlogControllers.getUserSpecificBlog,
);
//get single blog
router.get('/blogs/:id', BlogControllers.getSingleBlog);
//Show all blogs route
router.get('/blogs', BlogControllers.getAllBlog);
export const BlogRoutes = router;
