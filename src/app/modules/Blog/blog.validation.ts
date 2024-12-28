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
export const BlogValidations = {
  createBlogValidationSchema,
};
