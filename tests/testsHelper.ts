user1 = await RecordModel.create({
  userId: '1',
  status: 'ARRIVAL',
  createdAt: moment().subtract(1, 'days').toDate(),
});
