import chai from 'chai';
import 'mocha';

const expect = chai.expect;

chai.use(require('chai-http'));

const server = chai.request('localhost:3000');

describe('Consumers Public API', () => {

  let consumerId;

  it('should define the public /api/consumers routes', async () => {
    const res = await server.get('/api/consumers');
    expect(res).to.have.status(200);
    expect(res.body.length).to.equal(500);
    consumerId = res.body[0]._id;
  });

  it('should define the public /api/consumers/:id routes', async () => {
    const res = await server.get(`/api/consumers/${consumerId}`)
    expect(res).to.have.status(200);
    expect(res.body._id).to.equal(consumerId);
  });

});
