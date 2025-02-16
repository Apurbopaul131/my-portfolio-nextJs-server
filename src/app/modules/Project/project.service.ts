import AppError from '../../error/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  //check if user is exist
  // const isUserExist = await User.checkUserExistById(authenticateInfo?.userId);
  // if (!isUserExist) {
  //   throw new AppError(404, 'User not found!');
  // }
  //check if user is blocked
  // if (isUserExist.isBlocked) {
  //   throw new AppError(403, 'User is blocked!');
  // }
  //create blog
  const createdProject = await Project.create(payload);
  //Find blog by id for take some fields and populate author
  const result = await Project.findById(createdProject._id).select(
    'title year category description image liveLink repoLink technologies author',
  );
  return result;
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const isProjectExsit = await Project.findById(id);
  //check if blog exist or not
  if (!isProjectExsit) {
    throw new AppError(404, 'Project not found!');
  }

  //delete the blog
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).select(
    'title year category description image liveLink repoLink technologies author',
  );
  return result;
};

const deleteProjectIntoDB = async (id: string) => {
  const isBlogExsit = await Project.findById(id);
  //check if blog exist or not
  if (!isBlogExsit) {
    throw new AppError(404, 'Project not found!');
  }
  //delete the blog
  const result = await Project.findByIdAndDelete(id);
  return result;
};

const getSingleProjectFromDB = async (blogId: string) => {
  const result = Project.findById(blogId)
    .select(
      'title year category description image liveLink repoLink technologies',
    )
    .populate({
      path: 'author',
      select: 'name email role isBlocked',
    });
  return result;
};

const getAllProjectFormDB = async () => {
  const result = await Project.find({}).select(
    'title year category description image liveLink repoLink technologies author',
  );
  return result;
};
const getUserSpecificProjectFromDB = async (email: string) => {
  const result = await Project.find({ author: email }).select(
    'title year category description image liveLink repoLink technologies author',
  );
  return result;
};
export const ProjectServices = {
  createProjectIntoDB,
  updateProjectIntoDB,
  deleteProjectIntoDB,
  getSingleProjectFromDB,
  getAllProjectFormDB,
  getUserSpecificProjectFromDB,
};
