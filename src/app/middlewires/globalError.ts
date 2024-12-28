/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from 'express';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error?.statusCode || 500;
  const message = error?.message || 'Something went wrong';
  res.status(statusCode).json({
    succes: false,
    message,
    statusCode,
    error,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};
export default globalErrorHandler;
