const Player = require('./player')

class Round {
  constructor() {
    this.choices = {
      rock: { beats: "scissors" },
      paper: { beats: "rock" },
      scissors: { beats: "paper" },
    };
  }

  computerMove() {
    const keys = Object.keys(this.choices);
    return keys[Math.floor(Math.random() * 3)];
  }

  playRound(playerMove) {
    const computerChoice = this.computerMove();
    let result;
    if (playerMove === computerChoice) {
      result = "It's a draw!";
    } else if (this.choices[playerMove].beats === computerChoice) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
    return { result, computerChoice };
  }
}


module.exports = Round;
