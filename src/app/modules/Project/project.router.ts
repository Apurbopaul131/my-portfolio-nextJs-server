import express from 'express';
import validateRequest from '../../middlewires/validateRequest';

import { ProjectControllers } from './project.controller';
import { ProjectValidations } from './project.validation';

const router = express.Router();
//create blog route
router.post(
  '/dashboard/projects',
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProject,
);
//update Project route
router.patch(
  '/dashboard/projects/:id',
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject,
);
//dlelete blog route
router.delete('/dashboard/projects/:id', ProjectControllers.deleteProject);
//get single blog
router.get('/projects/:id', ProjectControllers.getSingleProject);
//Show all blogs route
router.get('/projects', ProjectControllers.getAllProject);
//get user specific project
router.get(
  '/dashboard/projects/user-specific/:email',
  ProjectControllers.getUserSpecificProject,
);
export const ProjectRoutes = router;
