import express from 'express';
import { ContactControllers } from './contact.controller';
const router = express.Router();

router.post('/dashboard/messages', ContactControllers.createContactMessage);
router.get('/dashboard/messages', ContactControllers.getAllContactMessage);

export const ContactRoutes = router;
