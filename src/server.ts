import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import swaggerDocs from './swagger';

class Server {
  readonly app: Express;
  readonly port: string = process.env.PORT ?? '3001';

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    swaggerDocs(this.app);
    this.app.get('/health-check', healthCheck);
  }

  start() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(
        '\x1b[32m',
        '[server]',
        'Listen on port',
        this.port,
        '\x1b[0m',
      );
    });
  }

  use(...handlers: any) {
    this.app.use(handlers);
  }
}

function healthCheck(_req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ status: 'ready' });
  return next();
}

export default new Server();
