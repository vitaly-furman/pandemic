import RecordService from './record.service';

class NotificationService {
  static async getExposedUsers(userId: string): Promise<string[]> {
    const pastWeekArrivalsByDay =
      await RecordService.getPastWeekArrivalsByDay();

    const exposedUsers = new Set<string>();

    for (const dayArrivals of pastWeekArrivalsByDay) {
      if (dayArrivals.userIds.includes(userId)) {
        dayArrivals.userIds.forEach((u) => exposedUsers.add(u));
      }
    }

    exposedUsers.delete(userId);
    return [...exposedUsers];
  }
}

export default NotificationService;
