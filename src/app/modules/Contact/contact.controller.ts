import { Request, Response } from 'express';
import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import { ContactServices } from './contact.services';

const createContactMessage = catchAsync(async (req: Request, res: Response) => {
  const { name, email, message } =
    await ContactServices.createContactMessageIntoDB(req.body);
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Contact message submitted successfully',
    statusCode: 201,
    data: {
      name,
      email,
      message,
    },
  });
});
const getAllContactMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactServices.getAllContactMessgeFromDB();
  //send response to client
  sendResponse(res, {
    success: true,
    message: 'Contact messages retrived successfully',
    statusCode: 201,
    data: result,
  });
});
export const ContactControllers = {
  createContactMessage,
  getAllContactMessage,
};
