const chai = require("chai");
const chaiHttp = require("chai-http");
const Round = require("../src/Round");
const Player = require("../src/Player");

chai.use(chaiHttp);

describe("Round class tests", () => {
  describe("computerMove() method", () => {
    it("should return a random move", () => {
      const round = new Round();
      const moves = ["rock", "paper", "scissors"];
      chai.expect(moves).to.include(round.computerMove());
    });
  });
});