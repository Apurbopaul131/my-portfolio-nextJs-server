import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../error/appError';
import { TUserRole } from '../modules/User/user.interface';
import { User } from '../modules/User/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      //check if token send from client
      if (!token) {
        throw new AppError(401, 'Invalid credentials');
      }
      //verify the token
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
      //destructure the decoded property
      const { userId, role } = decoded;
      const isUserExist = await User.checkUserExistById(userId);
      //check if user is exist
      if (!isUserExist) {
        throw new AppError(404, 'User not found!');
      }
      //check if user is blocked
      if (isUserExist?.isBlocked) {
        throw new AppError(403, 'User is blocked!');
      }
      //check Authorization who are authorize to access the data
      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(401, 'Invalid credentials');
      }
      req.user = decoded;
      next();
    } catch (err) {
      next(err);
    }
  };
};
export default auth;
