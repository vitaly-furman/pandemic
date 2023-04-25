import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import Server from '../src/server';
import RecordModel, { IRecord } from '../src/models/record';
import moment from 'moment';
import NotificationService from '../src/services/notification.service';

describe('E2E Tests', () => {
  let mongoServer: MongoMemoryServer;
  let server: Server;
  const port = 8000;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    server = new Server(port);
    await server.start();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  describe('Record', () => {
    beforeEach(async () => {
      mongoose.connection.dropDatabase();
    });

    const testRecord: Partial<IRecord> = {
      userId: 'test-user',
      status: 'ARRIVAL',
    };

    it('should create a record', async () => {
      const res = await request(server.app)
        .post('/api/v1/record')
        .send(testRecord);
      expect(res.status).toBe(201);
      expect(res.body).toMatchObject(testRecord);
    });

    it('should get all records', async () => {
      let res = await request(server.app)
        .post('/api/v1/record')
        .send(testRecord);
      expect(res.status).toBe(201);
      expect(res.body).toMatchObject(testRecord);

      res = await request(server.app).get(
        `/api/v1/record/${testRecord.userId}`
      );
      expect(res.status).toBe(200);
      expect(res.body[0]).toMatchObject(testRecord);
    });

    it('should fail if userId is missing', async () => {
      const res = await request(server.app)
        .post('/api/v1/record')
        .send({ status: 'ARRIVAL' });
      expect(res.status).toBe(400);
    });
  });
  describe('Notify', () => {
    let user1, user2, user3;
    beforeAll(async () => {
      // Generate three users with random arrival dates within the past week
      user1 = await RecordModel.create({
        userId: '1',
        status: 'ARRIVAL',
        createdAt: moment()
          .subtract(Math.floor(Math.random() * 7) + 1, 'days')
          .toDate(),
      });
      user2 = await RecordModel.create({
        userId: '2',
        status: 'ARRIVAL',
        createdAt: moment()
          .subtract(Math.floor(Math.random() * 7) + 1, 'days')
          .toDate(),
      });
      user3 = await RecordModel.create({
        userId: '3',
        status: 'ARRIVAL',
        createdAt: moment()
          .subtract(Math.floor(Math.random() * 7) + 1, 'days')
          .toDate(),
      });
    });

    afterAll(async () => {
      await RecordModel.deleteMany({ userId: { $in: ['1', '2', '3'] } });
    });

    it('should return exposed users for a given user', async () => {
      let exposedUsers = await NotificationService.getExposedUsers(
        user1.userId
      );

      let res = await request(server.app)
        .get(`/api/v1/notify/${user1.userId}`)
        .send();
      expect(res.status).toBe(200);
      expect(res.body?.exposedUsers).toEqual(exposedUsers);
    });

    it('should return an error if userId is not provided', async () => {
      const result = await request(server.app).get('/api/v1/notify');

      expect(result.status).toBe(404);
    });
  });
});
