import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../uitls/sendResponse';
import { BlogServies } from './blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogServies.createBlogIntoDB(req.user, req.body);
    //send response to client
    sendResponse(res, {
      success: true,
      message: 'Blog created successfully',
      statusCode: 201,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await BlogServies.updateBlogIntoDB(req.user, id, req.body);
    //send response to client
    sendResponse(res, {
      success: true,
      message: 'Blog updated successfully',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await BlogServies.deleteBlogIntoDB(req.user, id);
    //send response to client
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    });
  } catch (err) {
    next(err);
  }
};

export const BlogControllers = {
  createBlog,
  deleteBlog,
  updateBlog,
};
