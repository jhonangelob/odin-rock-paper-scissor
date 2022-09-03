let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("#button");
const animatedHands = document.querySelectorAll(".animatedHands");

const animateGame = (left, right) => {
  animatedHands.forEach((hands) => {
    hands.src = "./images/rock.svg";
    hands.classList.add("hand");
  });

  let animatePlayerHand = document.getElementById("imageP");
  let animateComputerHand = document.getElementById("imageC");

  buttons.forEach((button) => (button.disabled = true));

  setTimeout(() => {
    left === "paper" && (animatePlayerHand.src = "./images/paper.svg");
    left === "rock" && (animatePlayerHand.src = "./images/rock.svg");
    left === "scissor" && (animatePlayerHand.src = "./images/scissor.svg");
    right === "paper" && (animateComputerHand.src = "./images/paper.svg");
    right === "rock" && (animateComputerHand.src = "./images/rock.svg");
    right === "scissor" && (animateComputerHand.src = "./images/scissor.svg");

    animatedHands.forEach((hands) => hands.classList.remove("hand"));

    buttons.forEach((button) => (button.disabled = false));
  }, 1000);
};

const playRound = (value) => {
  let playerHand = value;
  let computerHand = getComputerHand();
  animateGame(playerHand, computerHand);
  setTimeout(() => {
    let result = checkResult(playerHand, computerHand);
    displayResult(result);
  }, 1000);
};

const getComputerHand = () => {
  let choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "scissor" : choice === 1 ? "rock" : "paper";
};

const checkResult = (playerHand, computerHand) => {
  return playerHand === "rock" && computerHand === "paper"
    ? "Computer Wins"
    : playerHand === "paper" && computerHand === "scissor"
    ? "Computer Wins"
    : playerHand === "scissor" && computerHand === "rock"
    ? "Computer Wins"
    : playerHand === "paper" && computerHand === "rock"
    ? "Player Wins"
    : playerHand === "scissor" && computerHand === "paper"
    ? "Player Wins"
    : playerHand === "rock" && computerHand === "scissor"
    ? "Player Wins"
    : "Draw";
};

const displayResult = (result) => {
  document.getElementById("result").textContent = result;

  result === "Player Wins" && (playerScore = playerScore + 1);
  result === "Computer Wins" && (computerScore = computerScore + 1);
  document.getElementById("playerscore").textContent = playerScore;
  document.getElementById("computerscore").textContent = computerScore;
};
