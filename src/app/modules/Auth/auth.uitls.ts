import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { TRole } from '../User/user.interface';

export const createToken = (
  jwtPayload: { userId: Types.ObjectId; email: string; role: TRole },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
