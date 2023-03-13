const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('POST /turn', function () {
    it('should return a response with status 200', async () => {
        const res = await chai.request(app).keepOpen().post('/turn').type('form').send({choice: 'rock'});
        expect(res).to.have.status(200);
    });
    it('should return a response with the data', async () => {
        const res = await chai.request(app).keepOpen().post('/turn').type('form').send({choice: 'rock'});
        expect(res.text).to.include('rock');
	});
});