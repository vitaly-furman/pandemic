import { initializeMongo } from './utils/mongo';
import Server from './server';
import config from './config/config';

const main = async () => {
  await initializeMongo();

  const port = config.port;
  const server = new Server(port);

  await server.start();

  console.log(`Server started on port: ${port}`);
};

main().catch((err) => console.error(err.message));
