import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import config from '../../config';
import { role } from './user.constant';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    role: {
      type: String,
      enum: { values: role, message: '{VALUE} is not supported' },
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
//execute post document middlewire to prevent send password to client
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
//Create a statics function that find user by default id
userSchema.statics.checkUserExistById = async function (id) {
  const isUserExist = await this.findById(id);
  return isUserExist;
};
userSchema.statics.checkLoginPasswordMatch = async function (
  plainTextPassword,
  hashPassword,
) {
  const match = await bcrypt.compare(plainTextPassword, hashPassword);
  return match;
};
export const User = model<TUser, UserModel>('User', userSchema);
