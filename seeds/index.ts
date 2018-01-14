import * as mongoose from 'mongoose';

import config from '../config';

const dbConnection = mongoose.createConnection(config.database.url);

dbConnection.once('open', (mongooseError) => {
  if (mongooseError) {
    throw mongooseError;
  } else {
    console.log('Preparing to seed database');
  }
});

dbConnection.close();
