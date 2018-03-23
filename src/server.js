import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import mongoose from 'mongoose';
import Promise from 'bluebird'

import config from './config';
import ExecutableGraphqlSchema from './graphql/schema';
import Consumer from './mongoose/consumer';
import Provider from './mongoose/provider';

const app = new Koa();
const router = new Router();

mongoose.connect(config.database.url, { useMongoClient: true });
mongoose.Promise = Promise;

// Public Rest APIs

router.get('/api/consumers', async (ctx) => {
  const consumers = await Consumer.Model.find();
  ctx.body = consumers;
});

router.get('/api/consumers/:_id', async (ctx) => {
  const consumer = await Consumer.Model.findOne({ _id: ctx.params._id });
  ctx.body = consumer;
});

router.get('/api/providers', async (ctx) => {
  const providers = await Provider.Model.find();
  ctx.body = providers;
});

router.get('/api/providers/:_id', async (ctx) => {
  const provider = await Provider.Model.findOne({ _id: ctx.params._id });
  ctx.body = provider;
});

// Private GraphQL APIs

router.post('/graphql', koaBody(), graphqlKoa({ schema: ExecutableGraphqlSchema }));
router.get('/graphql', graphqlKoa({ schema: ExecutableGraphqlSchema }));

if (process.env.NODE_ENV != 'production') {
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
}

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log('Server running on port 3000');
