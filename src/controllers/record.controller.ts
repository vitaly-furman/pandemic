import { Request, Response } from 'express';
import RecordService from '../services/record.service';
import { IRecord } from '../models/record';

class RecordController {
  static async createRecord(req: Request, res: Response) {
    const { userId, status } = req.body;

    if (!userId || !status) {
      return res.status(400).send('UserId and status are required.');
    }

    const record: Partial<IRecord> = { userId, status };

    try {
      const savedRecord = await RecordService.createRecord(record);
      res.status(201).json(savedRecord);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while creating the record');
    }
  }

  static async getAllRecords(req: Request, res: Response) {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send('UserId is required.');
    }

    try {
      const records = await RecordService.getAllUserRecords(userId);
      res.status(200).json(records);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while getting the records');
    }
  }
}

export default RecordController;
