import { Router } from 'express';
import NotificationController from '../controllers/notification.controller';

const notificationRouter = Router();

notificationRouter.get('/:userId', NotificationController.getExposedUsers);

export default notificationRouter;
