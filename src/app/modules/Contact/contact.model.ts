import { model, Schema } from 'mongoose';
import { TContactMessage } from './contact.interface';

const contactMessageSchema = new Schema<TContactMessage>(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required.'],
      trim: true,
    },
  },
  { timestamps: true },
);
export const Contact = model<TContactMessage>(
  'ContactMessage',
  contactMessageSchema,
);
