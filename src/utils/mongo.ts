import * as mongoose from 'mongoose';
import config from '../config/config';

export const initializeMongo = async () => {
  console.log('Connecting to Mongo...');

  await mongoose.connect(config.mongoUri);

  console.log('Mongo connection established');
};
