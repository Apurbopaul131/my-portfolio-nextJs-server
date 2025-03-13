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
exports.ContactControllers = void 0;
const catchAsync_1 = __importDefault(require("../../uitls/catchAsync"));
const sendResponse_1 = __importDefault(require("../../uitls/sendResponse"));
const contact_services_1 = require("./contact.services");
const createContactMessage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = yield contact_services_1.ContactServices.createContactMessageIntoDB(req.body);
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Contact message submitted successfully',
        statusCode: 201,
        data: {
            name,
            email,
            message,
        },
    });
}));
const getAllContactMessage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_services_1.ContactServices.getAllContactMessgeFromDB();
    //send response to client
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Contact messages retrived successfully',
        statusCode: 201,
        data: result,
    });
}));
exports.ContactControllers = {
    createContactMessage,
    getAllContactMessage,
};
