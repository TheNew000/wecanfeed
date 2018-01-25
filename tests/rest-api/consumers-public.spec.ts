import * as chai from 'chai';
import 'mocha';

const expect = chai.expect;

chai.use(require('chai-http'));

const server = chai.request('localhost:3000');

describe('Consumers Public API', () => {

  it('should define the public api routes', () => {
    server.get('/api/donation-consumers').then((res) => {
      expect(res).to.have.status(200);
      expect(res.body.length).to.equal(500);

      const consumerId = res.body[0].id;

      server.get(`/api/donation-consumers/${consumerId}`).then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.id).to.equal(consumerId);
      });
    });
  });

});
