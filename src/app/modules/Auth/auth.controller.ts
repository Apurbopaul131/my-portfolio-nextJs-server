import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../uitls/sendResponse';
import { AuthServices } from './auth.service';

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.loginUser(req.body);
    //send response to client
    sendResponse(res, {
      success: true,
      message: 'Login successful',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  registerUser,
  loginUser,
};
