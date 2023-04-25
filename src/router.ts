import { Router } from 'express';
import recordRouter from './routes/record.router';
import notificationRouter from './routes/notification.router';

const appRouter = Router();

appRouter.use('/api/v1/record', recordRouter);
appRouter.use('/api/v1/notify', notificationRouter);

appRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export default appRouter;
