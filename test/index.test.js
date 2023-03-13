const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', function () {
  it('should return status 200 and render index.ejs', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
  });
});

// describe('POST /index', function () {
//   it('should redirect to / when action is restart', async function () {
//     const action = 'restart'
//     const res = await chai.request(app).post('/index').send({action});
//     expect(res).to.redirectTo('/');
//   });

  it('should return status 400 when action is not restart', async function () {
    const res = await chai.request(app).post('/index').send({ action: 'invalid' });
    expect(res).to.have.status(400);
  });



