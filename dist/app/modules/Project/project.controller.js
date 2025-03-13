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
exports.ProjectControllers = void 0;
const catchAsync_1 = __importDefault(require("../../uitls/catchAsync"));
const sendResponse_1 = __importDefault(require("../../uitls/sendResponse"));
const project_service_1 = require("./project.service");
const createProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectServices.createProjectIntoDB(req.body);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Project created successfully',
        statusCode: 201,
        data: result,
    });
}));
const updateProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.updateProjectIntoDB(id, req.body);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Project updated successfully',
        statusCode: 200,
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield project_service_1.ProjectServices.deleteProjectIntoDB(id);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Project deleted successfully',
        statusCode: 200,
    });
}));
const getSingleProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.getSingleProjectFromDB(id);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Project retrived successfully',
        statusCode: 200,
        data: result,
    });
}));
const getAllProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectServices.getAllProjectFormDB();
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Projects retrived successfully',
        statusCode: 200,
        data: result,
    });
}));
const getUserSpecificProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const result = yield project_service_1.ProjectServices.getUserSpecificProjectFromDB(email);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Projects retrived successfully',
        statusCode: 200,
        data: result,
    });
}));
exports.ProjectControllers = {
    createProject,
    updateProject,
    deleteProject,
    getSingleProject,
    getAllProject,
    getUserSpecificProject,
};
