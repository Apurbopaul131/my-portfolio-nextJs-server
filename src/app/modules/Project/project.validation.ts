import { z } from 'zod';
import { projectCategory } from './project.constants';

// Zod schema for project validation
const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    year: z.string(),
    category: z.enum([...projectCategory] as [string, ...string[]], {
      message: 'Category must be frontend | backend | fullstack',
    }),
    description: z.string().min(1, 'Description is required'),
    futureScope: z.string().min(1, 'Future scope is required'),
    challenges: z.string().min(1, 'Challenges are required'),
    image: z.string().url('Invalid image URL'),
    liveLink: z.string().url('Invalid live link URL'),
    repoLink: z.string().url('Invalid repository URL'),
    technologies: z.string().min(1, 'Technologies are required'),
    author: z.string().email(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    year: z.string().optional(),
    category: z.enum([...projectCategory] as [string, ...string[]]).optional(),
    description: z.string().min(1, 'Description is required').optional(),
    futureScope: z.string().min(1, 'Future scope is required').optional(),
    challenges: z.string().min(1, 'Challenges are required').optional(),
    image: z.string().url('Invalid image URL').optional(),
    liveLink: z.string().url('Invalid live link URL').optional(),
    repoLink: z.string().url('Invalid repository URL').optional(),
    technologies: z.string().min(1, 'Technologies are required').optional(),
  }),
});
export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
