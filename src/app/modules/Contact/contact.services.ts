import { TContactMessage } from './contact.interface';
import { Contact } from './contact.model';

const createContactMessageIntoDB = async (payload: TContactMessage) => {
  const result = await Contact.create(payload);
  return result;
};

const getAllContactMessgeFromDB = async () => {
  const result = await Contact.find({}).select('name email message');
  return result;
};
export const ContactServices = {
  createContactMessageIntoDB,
  getAllContactMessgeFromDB,
};
