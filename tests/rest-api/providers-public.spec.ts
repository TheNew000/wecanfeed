import * as chai from 'chai';
import 'mocha';

const expect = chai.expect;

chai.use(require('chai-http'));

const server = chai.request('localhost:3000');

describe('Consumers Public API', () => {

  it('should define the public api routes', () => {
    server.get('/api/donation-providers').then((res) => {
      expect(res).to.have.status(200);
      expect(res.body.length).to.equal(50);

      const providerId = res.body[0].id;

      server.get(`/api/donation-providers/${providerId}`).then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.id).to.equal(providerId);
      });
    });
  });

});
