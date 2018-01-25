import * as chai from 'chai';
import 'mocha';

const expect = chai.expect;

chai.use(require('chai-http'));

const server = chai.request('localhost:3000');

describe('Consumers Public API', () => {

  let consumerId;

  it('should define the public /api/donation-consumers routes', async () => {
    const res = await server.get('/api/donation-consumers');
    expect(res).to.have.status(200);
    expect(res.body.length).to.equal(500);
    consumerId = res.body[0].id;
  });

  it('should define the public /api/donation-consumers/:id routes', async () => {
    const res = await server.get(`/api/donation-consumers/${consumerId}`)
    expect(res).to.have.status(200);
    expect(res.body.id).to.equal(consumerId);
  });

});
