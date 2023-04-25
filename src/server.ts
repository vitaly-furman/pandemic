import * as http from 'http';
import express from 'express';
import { once } from 'events';
import appRouter from './router';
import errorMiddleware from './middlewares/errorMiddleware';

class Server {
  public app: express.Application;

  private http: http.Server;

  private port: number;

  constructor(port: number) {
    this.app = Server.createExpressApp();
    this.port = port;
  }

  static createExpressApp() {
    const app = express();

    app.use(express.json());

    app.use(appRouter);

    app.use(errorMiddleware);

    return app;
  }

  async start() {
    this.http = this.app.listen(this.port);
    await once(this.http, 'listening');
  }

  stop() {
    this.http.close();
  }
}

export default Server;
