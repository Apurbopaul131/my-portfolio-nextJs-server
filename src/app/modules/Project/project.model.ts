import { model, Schema } from 'mongoose';
import { projectCategory } from './project.constants';
import { TProject } from './project.interface';

const ProjectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    year: { type: String, required: true },
    category: {
      type: String,
      enum: {
        values: projectCategory,
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
  },
  { timestamps: true },
);

export const Project = model<TProject>('Project', ProjectSchema);
