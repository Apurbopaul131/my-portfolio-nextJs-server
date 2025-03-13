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
exports.ProjectServices = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const project_model_1 = require("./project.model");
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //check if user is exist
    // const isUserExist = await User.checkUserExistById(authenticateInfo?.userId);
    // if (!isUserExist) {
    //   throw new AppError(404, 'User not found!');
    // }
    //check if user is blocked
    // if (isUserExist.isBlocked) {
    //   throw new AppError(403, 'User is blocked!');
    // }
    //create blog
    const createdProject = yield project_model_1.Project.create(payload);
    //Find blog by id for take some fields and populate author
    const result = yield project_model_1.Project.findById(createdProject._id).select('title year category description image liveLink repoLink technologies author');
    return result;
});
const updateProjectIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectExsit = yield project_model_1.Project.findById(id);
    //check if blog exist or not
    if (!isProjectExsit) {
        throw new AppError_1.default(404, 'Project not found!');
    }
    //delete the blog
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    }).select('title year category description image liveLink repoLink technologies author');
    return result;
});
const deleteProjectIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExsit = yield project_model_1.Project.findById(id);
    //check if blog exist or not
    if (!isBlogExsit) {
        throw new AppError_1.default(404, 'Project not found!');
    }
    //delete the blog
    const result = yield project_model_1.Project.findByIdAndDelete(id);
    return result;
});
const getSingleProjectFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = project_model_1.Project.findById(blogId)
        .select('title year category description image liveLink repoLink technologies')
        .populate({
        path: 'author',
        select: 'name email role isBlocked',
    });
    return result;
});
const getAllProjectFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find({}).select('title year category description image liveLink repoLink technologies author');
    return result;
});
const getUserSpecificProjectFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find({ author: email }).select('title year category description image liveLink repoLink technologies author');
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    updateProjectIntoDB,
    deleteProjectIntoDB,
    getSingleProjectFromDB,
    getAllProjectFormDB,
    getUserSpecificProjectFromDB,
};
