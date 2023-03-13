const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

// describe('POST /turn', async ()=>{
//   it('should render turn.ejs with player and computer choice', async()=>{
//     const playerChoice = 'rock';
//     const res = await chai.request(app).post('/turn').type('form').send({playerChoice})
//         // expect(res).to.have.status(200);
//         console.log(res)
//         expect(res).to.contain({playerChoice});
//       });
//   });
