import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { AuthServices } from './auth.service';

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUserIntoDB(req.body);
  //destructure the properities to send the client
  const { _id, name, email } = result.toObject();
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: {
      _id,
      name,
      email,
    },
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const accessToken = await AuthServices.loginUser(req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: 200,
    data: accessToken,
  });
});

export const AuthControllers = {
  registerUser,
  loginUser,
};
