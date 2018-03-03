import Koa from 'koa';
import Router from 'koa-router';

import mongoose from 'mongoose';
import Promise from 'bluebird'
import faker from 'faker';

import config from './config';

import DonationConsumer from './domain-model/donation-consumer';
import DonationProvider from './domain-model/donation-provider';

const app = new Koa();
const router = new Router();

mongoose.connect(config.database.url, { useMongoClient: true });
mongoose.Promise = Promise;

router.get('/api/donation-consumers', async (ctx) => {
  const consumers = await DonationConsumer.Model.find();
  ctx.body = consumers;
});

router.get('/api/donation-consumers/:_id', async (ctx) => {
  const consumer = await DonationConsumer.Model.findOne({ _id: ctx.params._id });
  ctx.body = consumer;
});

router.get('/api/donation-providers', async (ctx) => {
  const providers = await DonationProvider.Model.find();
  ctx.body = providers;
});

router.get('/api/donation-providers/:_id', async (ctx) => {
  const provider = await DonationProvider.Model.findOne({ _id: ctx.params._id });
  ctx.body = provider;
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
