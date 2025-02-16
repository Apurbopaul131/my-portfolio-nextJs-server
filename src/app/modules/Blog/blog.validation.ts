import { z } from 'zod';
import { blogCategories } from './blog.constant';

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
    image: z.string({
      required_error: 'Image is required',
      invalid_type_error: 'Image must be string',
    }),
    category: z.enum([...blogCategories] as [string, ...string[]], {
      message:
        'Category must be Web Development | Mobile App Development | Software Engineering & Best Practices | Programming Languages | Data Science & Machine Learning | Cloud Computing & DevOps | Cybersecurity & Ethical Hacking | Game Development | Blockchain & Web3 Development',
    }),
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
    image: z
      .string({
        required_error: 'Image is required',
        invalid_type_error: 'Image must be string',
      })
      .optional(),
    category: z
      .enum([...blogCategories] as [string, ...string[]], {
        message:
          'Category must be Web Development | Mobile App Development | Software Engineering & Best Practices | Programming Languages | Data Science & Machine Learning | Cloud Computing & DevOps | Cybersecurity & Ethical Hacking | Game Development | Blockchain & Web3 Development',
      })
      .optional(),
  }),
});
export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
