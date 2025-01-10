/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';
import { ZodError } from 'zod';
import config from '../config';
import handleMongooseValidationError from '../error/mongooseValidationError';
import handleZodError from '../error/zodError';
import { TErrorSources, TGenericsErrorResponse } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];
  if (error instanceof ZodError) {
    const simplifiedError: TGenericsErrorResponse = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error instanceof mongoose.Error.ValidationError) {
    const simplifiedError: TGenericsErrorResponse =
      handleMongooseValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    err: error,
    error: errorSources,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};
export default globalErrorHandler;
