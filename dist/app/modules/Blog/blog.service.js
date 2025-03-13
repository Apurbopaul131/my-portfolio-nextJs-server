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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServies = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const blog_constant_1 = require("./blog.constant");
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //create blog
    const createdBlog = yield blog_model_1.Blog.create(payload);
    //Find blog by id for take some fields and populate author
    const result = yield blog_model_1.Blog.findById(createdBlog._id).select('title content author image category  publish_date blog_writter total_likes');
    return result;
});
const updateBlogIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExsit = yield blog_model_1.Blog.isBlogExistById(id);
    //check if blog exist or not
    if (!isBlogExsit) {
        throw new AppError_1.default(404, 'Blog not found!');
    }
    //delete the blog
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    }).select('title content author image category publish_date blog_writter total_likes');
    return result;
});
const deleteBlogIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExsit = yield blog_model_1.Blog.isBlogExistById(id);
    //check if blog exist or not
    if (!isBlogExsit) {
        throw new AppError_1.default(404, 'Blog not found!');
    }
    //delete the blog
    const result = yield blog_model_1.Blog.findByIdAndDelete(id).select('title content author image category  publish_date');
    return result;
});
const getSingleblogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = blog_model_1.Blog.findById(blogId).select('title content author image category publish_date blog_writter total_likes');
    return result;
});
const getUserSpecificBlogFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find({ author: email }).select('title content author image category publish_date blog_writter total_likes');
    return result;
});
const getAllBlogFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogQuery = new QueryBuilder_1.default(blog_model_1.Blog.find({}).select('title content author image category publish_date blog_writter total_likes'), query)
        .search(blog_constant_1.searchableFields)
        .filter()
        .sort();
    const result = yield blogQuery.queryModel;
    return result;
});
exports.BlogServies = {
    createBlogIntoDB,
    deleteBlogIntoDB,
    updateBlogIntoDB,
    getAllBlogFromDB,
    getSingleblogFromDB,
    getUserSpecificBlogFromDB,
};
