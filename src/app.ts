import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewires/globalError';
import notFound from './app/middlewires/notFound';
import { AuthRoutes } from './app/modules/Auth/auth.route';
import { BlogRoutes } from './app/modules/Blog/blog.route';
import { ContactRoutes } from './app/modules/Contact/contact.route';
import { ProjectRoutes } from './app/modules/Project/project.router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Auth Route
app.use('/api', AuthRoutes);
//Blog Route
app.use('/api', BlogRoutes);
//Contact route
app.use('/api', ContactRoutes);
//project route
app.use('/api', ProjectRoutes);
//checking route
app.get('/', (req: Request, res: Response) => {
  res.send('Connected successfully.');
});
//global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app;
