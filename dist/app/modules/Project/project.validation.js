"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidations = void 0;
const zod_1 = require("zod");
const project_constants_1 = require("./project.constants");
// Zod schema for project validation
const createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        year: zod_1.z.string(),
        category: zod_1.z.enum([...project_constants_1.projectCategory], {
            message: 'Category must be frontend | backend | fullstack',
        }),
        description: zod_1.z.string().min(1, 'Description is required'),
        image: zod_1.z.string().url('Invalid image URL'),
        liveLink: zod_1.z.string().url('Invalid live link URL'),
        repoLink: zod_1.z.string().url('Invalid repository URL'),
        technologies: zod_1.z.string().min(1, 'Technologies are required'),
        author: zod_1.z.string().email(),
    }),
});
const updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        year: zod_1.z.string().optional(),
        category: zod_1.z.enum([...project_constants_1.projectCategory]).optional(),
        description: zod_1.z.string().min(1, 'Description is required').optional(),
        image: zod_1.z.string().url('Invalid image URL').optional(),
        liveLink: zod_1.z.string().url('Invalid live link URL').optional(),
        repoLink: zod_1.z.string().url('Invalid repository URL').optional(),
        technologies: zod_1.z.string().min(1, 'Technologies are required').optional(),
    }),
});
exports.ProjectValidations = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
