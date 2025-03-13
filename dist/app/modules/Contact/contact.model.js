"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactMessageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Message is required.'],
        trim: true,
    },
}, { timestamps: true });
exports.Contact = (0, mongoose_1.model)('ContactMessage', contactMessageSchema);
