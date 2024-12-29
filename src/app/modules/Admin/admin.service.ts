import { JwtPayload } from 'jsonwebtoken';
import AppError from '../../error/appError';
import { Blog } from '../Blog/blog.model';
import { User } from '../User/user.model';

const blockedUserByAdminIntoDB = async (
  authenticateUserInfo: JwtPayload,
  userId: string,
) => {
  const isAdminExist = await User.checkUserExistById(
    authenticateUserInfo?.userId,
  );
  //check if authenticate admin exist
  if (!isAdminExist) {
    throw new AppError(404, 'Admin not found!');
  }
  //check if admin is blocked
  if (isAdminExist?.isBlocked) {
    throw new AppError(403, 'Admin is blocked!');
  }
  const isUserExist = await User.checkUserExistById(userId);
  //check if user is exist
  if (!isUserExist) {
    throw new AppError(404, 'User not found!');
  }
  //check if user is already blocked
  if (isUserExist.isBlocked) {
    throw new AppError(403, 'User is already blocked!');
  }
  const result = await User.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    {
      new: true,
    },
  );
  return result;
};

const deletedBlogByAdminIntoDB = async (
  authenticateUserInfo: JwtPayload,
  blogId: string,
) => {
  const isAdminExist = await User.checkUserExistById(
    authenticateUserInfo?.userId,
  );
  //check if authenticate admin exist
  if (!isAdminExist) {
    throw new AppError(404, 'Admin not found!');
  }
  //check if admin is blocked
  if (isAdminExist?.isBlocked) {
    throw new AppError(403, 'Admin is blocked!');
  }
  const isBlogExist = await Blog.isBlogExistById(blogId);
  //check if user is exist
  if (!isBlogExist) {
    throw new AppError(404, 'Blog not found!');
  }
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};
export const AdminServices = {
  blockedUserByAdminIntoDB,
  deletedBlogByAdminIntoDB,
};
