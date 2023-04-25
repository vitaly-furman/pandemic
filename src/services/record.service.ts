import moment from 'moment';
import RecordModel, { IRecord, ArrivalsPerDay } from '../models/record';

class RecordService {
  static async createRecord(record: Partial<IRecord>): Promise<IRecord> {
    const savedRecord = await RecordModel.create(record);
    return savedRecord;
  }

  static async getAllUserRecords(
    userId: string,
    timestamp?: Date
  ): Promise<IRecord[]> {
    const records = await RecordModel.find({
      userId: userId,
      ...(timestamp ? { createdAt: { $gte: timestamp } } : {}),
    }).sort({
      createdAt: 'desc',
    });
    return records;
  }

  static async getPastWeekArrivalsByDay(): Promise<ArrivalsPerDay[]> {
    const startOfLastWeek = moment()
      .subtract(1, 'week')
      .startOf('week')
      .toDate();

    const records = await RecordModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startOfLastWeek,
          },
          status: 'ARRIVAL',
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: '%Y-%m-%d',
              date: '$createdAt',
            },
          },
          userIds: {
            $addToSet: '$userId',
          },
        },
      },
    ]);

    return records.map((r) => ({ day: r._id, userIds: r.userIds }));
  }
}

export default RecordService;
