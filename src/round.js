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

  playRound(playerMove,computerChoice) {
    if (playerMove === computerChoice) {
      return "It's a tie!";
    } else if (this.choices[playerMove].beats === computerChoice) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
}


module.exports = Round;
