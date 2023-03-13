const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
    it('should return 200 status ', async () => {
      const res = await chai.request(app).get('/');
      expect(res).to.have.status(200);
      expect(res.text).to.include("Hi, welcome to Rock paper scissors game!");
    });
  });
