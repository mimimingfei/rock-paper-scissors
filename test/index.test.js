const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /index', function () {
  it('should return status 200 and render index.ejs', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
  });
});


