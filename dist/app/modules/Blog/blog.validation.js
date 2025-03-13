"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidations = void 0;
const zod_1 = require("zod");
const blog_constant_1 = require("./blog.constant");
const createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
            invalid_type_error: 'Title must be string',
        }),
        content: zod_1.z.string({
            required_error: 'Content is required',
            invalid_type_error: 'Content must be string',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be string',
        }),
        category: zod_1.z.enum([...blog_constant_1.blogCategories], {
            message: 'Category must be Web Development | Mobile App Development | Software Engineering & Best Practices | Programming Languages | Data Science & Machine Learning | Cloud Computing & DevOps | Cybersecurity & Ethical Hacking | Game Development | Blockchain & Web3 Development',
        }),
        blog_writter: zod_1.z.string({
            required_error: 'Blog writter is required',
            invalid_type_error: 'Blog writter must be string',
        }),
        total_likes: zod_1.z.string({
            required_error: 'Total like is required',
            invalid_type_error: 'Total like must be string',
        }),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            invalid_type_error: 'Title must be string',
        })
            .optional(),
        content: zod_1.z
            .string({
            invalid_type_error: 'Content must be string',
        })
            .optional(),
        image: zod_1.z
            .string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be string',
        })
            .optional(),
        category: zod_1.z
            .enum([...blog_constant_1.blogCategories], {
            message: 'Category must be Web Development | Mobile App Development | Software Engineering & Best Practices | Programming Languages | Data Science & Machine Learning | Cloud Computing & DevOps | Cybersecurity & Ethical Hacking | Game Development | Blockchain & Web3 Development',
        })
            .optional(),
        blog_writter: zod_1.z
            .string({
            required_error: 'Blog writter is required',
            invalid_type_error: 'Blog writter must be string',
        })
            .optional(),
        total_likes: zod_1.z
            .string({
            required_error: 'Total like is required',
            invalid_type_error: 'Total like must be string',
        })
            .optional(),
    }),
});
exports.BlogValidations = {
    createBlogValidationSchema,
    updateBlogValidationSchema,
};
