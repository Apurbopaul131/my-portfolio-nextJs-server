"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const project_constants_1 = require("./project.constants");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    year: { type: String, required: true },
    category: {
        type: String,
        enum: {
            values: project_constants_1.projectCategory,
            message: '{VALUE} is not supported',
        },
        required: true,
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
    liveLink: { type: String, required: true },
    repoLink: { type: String, required: true },
    technologies: { type: String, required: true },
    author: { type: String, required: true },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', ProjectSchema);
