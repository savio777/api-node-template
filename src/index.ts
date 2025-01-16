if (!process.env.NODE_ENV) {
  require('dotenv').config();
}

import './shared/utils/errors';
import server from './server';
import errorHandling from './shared/utils/errorHandling';

if (process.env.NODE_ENV !== 'test') {
  server.start();
}

import './app/example/exemple.controller';

server.use(errorHandling);
