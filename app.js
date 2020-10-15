const game = () => {
  let pScore = 0;
  let cScore = 0;
  let tie = 0;

  //Start the Game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const player = document.querySelector(".player-hand");
    const comp = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Comp hand options
    const compOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const compNum = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNum];

        setTimeout(() => {
          compareHands(this.textContent, compChoice);
          player.src = `./pics/${this.textContent}.png`;
          comp.src = `./pics/${compChoice}.png`;
        }, 2000);
        //Animation
        player.style.animation = "shakePlayer 2s ease";
        comp.style.animation = "shakeComp 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const tieScore = document.querySelector(".tie p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    tieScore.textContent = tie;
  };

  const compareHands = (playerChoice, compChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === compChoice) {
      winner.textContent = "Players Tie";
      tie++;
      updateScore();
      return;
    }
    //rock
    if (playerChoice === "rock") {
      if (compChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //paper
    if (playerChoice === "paper") {
      if (compChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //scissors
    if (playerChoice === "scissors") {
      if (compChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  //call inner functions
  startGame();
  playMatch();
};
//start game
game();
