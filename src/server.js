import Koa from 'koa';
import Router from 'koa-router';

import mongoose from 'mongoose';
import Promise from 'bluebird'
import faker from 'faker';

import config from './config';

import Consumer from './domain-model/consumer';
import Provider from './domain-model/provider';

const app = new Koa();
const router = new Router();

mongoose.connect(config.database.url, { useMongoClient: true });
mongoose.Promise = Promise;

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

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
