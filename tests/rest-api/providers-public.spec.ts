import * as chai from 'chai';
import 'mocha';

const expect = chai.expect;

chai.use(require('chai-http'));

const server = chai.request('localhost:3000');

describe('Consumers Public API', () => {

  it('should define the api route', () => {
    server.get('/api/').then((res) => {
      expect(res).to.have.status(200);
    });
  });

});
