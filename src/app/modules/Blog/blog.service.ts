import { JwtPayload } from 'jsonwebtoken';
import AppError from '../../error/appError';
import { User } from '../User/user.model';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (
  authenticateInfo: JwtPayload,
  payload: TBlog,
) => {
  //check if user is exist
  const isUserExist = await User.checkUserExistById(authenticateInfo?.userId);
  if (!isUserExist) {
    throw new AppError(404, 'User not found!');
  }
  //create blog
  const createdBlog = await Blog.create({
    ...payload,
    author: authenticateInfo?.userId,
  });
  //Find blog by id for take some fields and populate author
  const result = await Blog.findById(createdBlog._id)
    .select('title content author')
    .populate({
      path: 'author',
      select: 'name email role isBlocked',
    });
  return result;
};

const deleteBlogIntoDB = async (authenticateInfo: JwtPayload, id: string) => {
  const isBlogExsit = await Blog.isBlogExistById(id);
  //check if blog exist or not
  if (!isBlogExsit) {
    throw new AppError(404, 'Blog not found!');
  }

  const isUserExist = await User.checkUserExistById(authenticateInfo?.userId);
  //check if user is exist or not
  if (!isUserExist) {
    throw new AppError(404, 'User not found!');
  }
  //check if token is valid or not
  if (isBlogExsit?.author.toString() !== authenticateInfo?.userId) {
    throw new AppError(401, 'Invalid credentials');
  }
  //delete the blog
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
export const BlogServies = {
  createBlogIntoDB,
  deleteBlogIntoDB,
};
