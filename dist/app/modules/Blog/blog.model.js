"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    content: {
        type: String,
        required: [true, 'Content is required.'],
    },
    author: {
        type: String,
        required: [true, 'Author is required.'],
    },
    image: {
        type: String,
        required: [true, 'Image url is required.'],
    },
    category: {
        type: String,
        enum: {
            values: [
                'Web Development',
                'Mobile App Development',
                'Software Engineering & Best Practices',
                'Programming Languages',
                'Data Science & Machine Learning',
                'Cloud Computing & DevOps',
                'Cybersecurity & Ethical Hacking',
                'Game Development',
                'Blockchain & Web3 Development',
                'Tech Trends & Career Growth',
            ],
            message: '{VALUE} is not supported',
        },
    },
    publish_date: {
        type: Date,
        default: Date.now,
    },
    blog_writter: {
        type: String,
        required: [true, 'Blog writter is required'],
    },
    total_likes: {
        type: String,
        required: [true, 'Total like is required'],
    },
}, {
    timestamps: true,
});
//This statics function is used to find already exising blog
blogSchema.statics.isBlogExistById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const isBlogExist = yield this.findById(id);
        return isBlogExist;
    });
};
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
