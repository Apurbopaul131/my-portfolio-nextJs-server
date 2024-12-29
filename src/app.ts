import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewires/globalError';
import notFound from './app/middlewires/notFound';
import { AdminRoutes } from './app/modules/Admin/admin.route';
import { AuthRoutes } from './app/modules/Auth/auth.route';
import { BlogRoutes } from './app/modules/Blog/blog.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//Auth Route
app.use('/api', AuthRoutes);
//Blog Route
app.use('/api', BlogRoutes);
//Admin Route
app.use('/api', AdminRoutes);
//checking route
app.get('/', (req: Request, res: Response) => {
  res.send('connected Successfully.');
});
//global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app;
