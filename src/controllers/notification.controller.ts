import { Request, Response } from 'express';
import NotificationService from '../services/notification.service';

class NotificationController {
  static async getExposedUsers(req: Request, res: Response) {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send('UserId is required.');
    }

    try {
      const exposedUsers = await NotificationService.getExposedUsers(userId);
      res.status(200).json({ exposedUsers: exposedUsers });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while getting the records');
    }
  }
}

export default NotificationController;
