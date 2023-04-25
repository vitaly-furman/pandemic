import { Router } from 'express';
import recordRouter from './routes/record.router';
import notificationRouter from './routes/notification.router';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const appRouter = Router();

appRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

appRouter.use('/api/v1/record', recordRouter);
appRouter.use('/api/v1/notify', notificationRouter);

appRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export default appRouter;
