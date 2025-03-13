import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { BlogServies } from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServies.createBlogIntoDB(req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServies.updateBlogIntoDB(id, req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: 200,
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BlogServies.deleteBlogIntoDB(id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServies.getSingleblogFromDB(id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog retrived successfully',
    statusCode: 200,
    data: result,
  });
});

const getUserSpecificBlog = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await BlogServies.getUserSpecificBlogFromDB(email);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blogs retrived successfully',
    statusCode: 200,
    data: result,
  });
});
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServies.getAllBlogFromDB(req.query);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blogs retrived successfully',
    statusCode: 200,
    data: result,
  });
});
export const BlogControllers = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlog,
  getSingleBlog,
  getUserSpecificBlog,
};
