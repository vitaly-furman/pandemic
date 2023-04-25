import dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.PORT) || 80,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost',
};
