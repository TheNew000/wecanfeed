// import chai from 'chai';
// import 'mocha';
//
// const expect = chai.expect;
//
// chai.use(require('chai-http'));
//
// const server = chai.request('localhost:3000');
//
// describe('Providers Public API', () => {
//
//   let providerId;
//
//   it('should define the public /api/providers route', async () => {
//     const res = await server.get('/api/providers');
//     expect(res).to.have.status(200);
//     expect(res.body.length).to.equal(50);
//     providerId = res.body[0]._id;
//   });
//
//   it('should define the public /api/providers/:id routes', async () => {
//     const res = await server.get(`/api/providers/${providerId}`)
//     expect(res).to.have.status(200);
//     expect(res.body._id).to.equal(providerId);
//   });
//
// });
