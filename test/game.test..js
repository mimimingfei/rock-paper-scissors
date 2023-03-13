const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

    describe('GET /game', function () {
        it('should return status 200', async () => {
            const res = await chai.request(app).get('/game')
            expect(res).to.have.status(200) 
        });
    });

    describe('POST /game', function () {
        it('should return status 200 and render game.ejs with player name', async () => {
          const playerName = 'Alice';
          const res = await chai.request(app).post('/game').type('form').send({ player: playerName })
          expect(res.text).to.contain(playerName);
          expect(res).to.have.status(200) 
        });
      });
    