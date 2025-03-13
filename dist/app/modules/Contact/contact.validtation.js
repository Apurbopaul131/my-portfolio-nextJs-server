"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidations = void 0;
const zod_1 = require("zod");
const contactMessagValidationbSchema = zod_1.z.object({
    name: zod_1.z.string().trim(),
    email: zod_1.z
        .string()
        .email({ message: 'Please enter a valid email address.' })
        .trim(),
    message: zod_1.z.string().trim(),
});
exports.ContactValidations = {
    contactMessagValidationbSchema,
};
