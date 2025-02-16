import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Project created successfully',
    statusCode: 201,
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProjectIntoDB(id, req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Project updated successfully',
    statusCode: 200,
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProjectServices.deleteProjectIntoDB(id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Project deleted successfully',
    statusCode: 200,
  });
});

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDB(id);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Project retrived successfully',
    statusCode: 200,
    data: result,
  });
});

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProjectFormDB();
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Projects retrived successfully',
    statusCode: 200,
    data: result,
  });
});

const getUserSpecificProject = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.params;
    const result = await ProjectServices.getUserSpecificProjectFromDB(email);
    //send response to client
    sendResponse(res, {
      success: true,
      message: 'Projects retrived successfully',
      statusCode: 200,
      data: result,
    });
  },
);
export const ProjectControllers = {
  createProject,
  updateProject,
  deleteProject,
  getSingleProject,
  getAllProject,
  getUserSpecificProject,
};
