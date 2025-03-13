"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalError_1 = __importDefault(require("./app/middlewires/globalError"));
const notFound_1 = __importDefault(require("./app/middlewires/notFound"));
const auth_route_1 = require("./app/modules/Auth/auth.route");
const blog_route_1 = require("./app/modules/Blog/blog.route");
const contact_route_1 = require("./app/modules/Contact/contact.route");
const project_router_1 = require("./app/modules/Project/project.router");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//Auth Route
app.use('/api', auth_route_1.AuthRoutes);
//Blog Route
app.use('/api', blog_route_1.BlogRoutes);
//Contact route
app.use('/api', contact_route_1.ContactRoutes);
//project route
app.use('/api', project_router_1.ProjectRoutes);
//checking route
app.get('/', (req, res) => {
    res.send('Connected successfully.');
});
//global error handler
app.use(globalError_1.default);
//Not Found
app.use(notFound_1.default);
exports.default = app;
