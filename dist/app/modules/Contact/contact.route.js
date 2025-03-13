"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
router.post('/dashboard/messages', contact_controller_1.ContactControllers.createContactMessage);
router.get('/dashboard/messages', contact_controller_1.ContactControllers.getAllContactMessage);
exports.ContactRoutes = router;
