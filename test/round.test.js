const chai = require("chai");
const chaiHttp = require("chai-http");
const Round = require("../src/Round");
const Player = require("../src/Player");

chai.use(chaiHttp);

describe("Round class tests", () => {
    it("computerMove() should return a random move", () => {
      const round = new Round();
      const choices= ["rock", "paper", "scissors"];
      chai.expect(choices).to.include(round.computerMove());
    });

describe('playRound() should return correct result',()=>{
    it('should return You Win',()=>{
      const round = new Round();
      const playerChoice ="paper";
      const computerChoice = 'rock';
      const result = round.playRound(playerChoice,computerChoice)
      chai.expect(result).to.equal("You win!")
    })
    it("should return It's a tie ",()=>{
      const round = new Round();
      const result = round.playRound("rock","rock")
      chai.expect(result).to.equal("It's a tie!")
    })
    it("should return Computer wins ",()=>{
      const round = new Round();
      const result = round.playRound("scissors","rock")
      chai.expect(result).to.equal("Computer wins!")
    })
})
  });