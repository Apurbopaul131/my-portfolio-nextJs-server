import { z } from 'zod';

const contactMessagValidationbSchema = z.object({
  name: z.string().trim(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .trim(),
  message: z.string().trim(),
});
export const ContactValidations = {
  contactMessagValidationbSchema,
};
