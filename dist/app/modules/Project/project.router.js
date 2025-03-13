"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewires/validateRequest"));
const project_controller_1 = require("./project.controller");
const project_validation_1 = require("./project.validation");
const router = express_1.default.Router();
//create blog route
router.post('/dashboard/projects', (0, validateRequest_1.default)(project_validation_1.ProjectValidations.createProjectValidationSchema), project_controller_1.ProjectControllers.createProject);
//update Project route
router.patch('/dashboard/projects/:id', (0, validateRequest_1.default)(project_validation_1.ProjectValidations.updateProjectValidationSchema), project_controller_1.ProjectControllers.updateProject);
//dlelete blog route
router.delete('/dashboard/projects/:id', project_controller_1.ProjectControllers.deleteProject);
//get single blog
router.get('/projects/:id', project_controller_1.ProjectControllers.getSingleProject);
//Show all blogs route
router.get('/projects', project_controller_1.ProjectControllers.getAllProject);
//get user specific project
router.get('/dashboard/projects/user-specific/:email', project_controller_1.ProjectControllers.getUserSpecificProject);
exports.ProjectRoutes = router;
