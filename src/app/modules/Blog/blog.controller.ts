import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { BlogServies } from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServies.createBlogIntoDB(req.user, req.body);
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
  const result = await BlogServies.updateBlogIntoDB(req.user, id, req.body);
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
  await BlogServies.deleteBlogIntoDB(req.user, id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServies.getAllBlogFromDB(req.query);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: 200,
    data: result,
  });
});
export const BlogControllers = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlog,
};
