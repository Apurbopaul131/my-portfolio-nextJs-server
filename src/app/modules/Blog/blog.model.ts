import { model, Schema } from 'mongoose';
import { BlogModel, TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog, BlogModel>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    content: {
      type: String,
      required: [true, 'Content is required.'],
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, 'Author is required.'],
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
blogSchema.statics.isBlogExistById = async function (id) {
  const isBlogExist = await this.findById(id);
  return isBlogExist;
};
export const Blog = model<TBlog, BlogModel>('Blog', blogSchema);
