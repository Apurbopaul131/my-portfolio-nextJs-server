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
  },
  {
    timestamps: true,
  },
);
//This statics function is used to find already exising blog
blogSchema.statics.isBlogExistById = async function (id) {
  const isBlogExist = await this.findById(id);
  return isBlogExist;
};
export const Blog = model<TBlog, BlogModel>('Blog', blogSchema);
