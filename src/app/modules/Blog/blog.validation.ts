import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be string',
    }),
    content: z.string({
      required_error: 'Content is required',
      invalid_type_error: 'Content must be string',
    }),
    isPublished: z
      .boolean({ invalid_type_error: 'isPublisher must be boolean' })
      .optional(),
  }),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be string',
      })
      .optional(),
    content: z
      .string({
        invalid_type_error: 'Content must be string',
      })
      .optional(),
  }),
});
export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
