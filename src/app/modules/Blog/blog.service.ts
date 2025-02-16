import { JwtPayload } from 'jsonwebtoken';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';
import { User } from '../User/user.model';
import { searchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  //create blog
  const createdBlog = await Blog.create(payload);
  //Find blog by id for take some fields and populate author
  const result = await Blog.findById(createdBlog._id).select(
    'title content author image category  publish_date',
  );

  return result;
};

const updateBlogIntoDB = async (
  authenticateInfo: JwtPayload,
  id: string,
  payload: Partial<TBlog>,
) => {
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
  //check if user blocked
  if (isUserExist?.isBlocked) {
    throw new AppError(403, 'User is blocked!');
  }
  //check if token is valid or not
  if (isBlogExsit?.author.toString() !== authenticateInfo?.userId) {
    throw new AppError(401, 'Invalid credentials');
  }
  //delete the blog
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
    .select('title content author')
    .populate({
      path: 'author',
      select: 'name email role isBlocked',
    });
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const isBlogExsit = await Blog.isBlogExistById(id);
  //check if blog exist or not
  if (!isBlogExsit) {
    throw new AppError(404, 'Blog not found!');
  }
  //delete the blog
  const result = await Blog.findByIdAndDelete(id).select(
    'title content author image category  publish_date',
  );
  return result;
};

const getSingleblogFromDB = async (blogId: string) => {
  const result = Blog.findById(blogId).select(
    'title content author image category publish_date',
  );
  return result;
};

const getUserSpecificBlogFromDB = async (email: string) => {
  const result = await Blog.find({ author: email }).select(
    'title content author image category publish_date',
  );
  return result;
};
const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find({})
      .select('title content author image category publish_date')
      .populate({
        path: 'author',
        select: 'name email role isBlocked',
      }),
    query,
  )
    .search(searchableFields)
    .filter()
    .sort();
  const result = await blogQuery.queryModel;
  return result;
};

export const BlogServies = {
  createBlogIntoDB,
  deleteBlogIntoDB,
  updateBlogIntoDB,
  getAllBlogFromDB,
  getSingleblogFromDB,
  getUserSpecificBlogFromDB,
};
