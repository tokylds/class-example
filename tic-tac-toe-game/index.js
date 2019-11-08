const bannerElement = document.querySelector("#banner");
const resetGameButtonElements = document.querySelector("#resetGame");
const squareButtonElements = document.querySelectorAll(".square");
let currentPlayerTurn = "X";
let isGameOver = false;
let turnCount = 0;
bannerElement.textContent = `Current Player's Turn: ${currentPlayerTurn}`;

for (let i = 0; i < squareButtonElements.length; i++) {
  const squareButtonElement = squareButtonElements[i];

  squareButtonElement.addEventListener("click", function(event) {
    console.log("Square" + (i + 1) + "Clicked!");
    const element = event.target;
    const currentValue = element.textContent;

    if (currentValue !== "" || isGameOver) {
      return;
    }

    turnCount++;

    if (currentPlayerTurn === "X") {
      element.textContent = "X";
      checkForWinner(currentPlayerTurn);
      currentPlayerTurn = "O";
    } else {
      element.textContent = "O";
      checkForWinner(currentPlayerTurn);
      currentPlayerTurn = "X";
    }

    if (!isGameOver && turnCount !== 9) {
      bannerElement.textContent = `Current Player's Turn: ${currentPlayerTurn}`;
    }

    if (turnCount === 9) {
      isGameOver = true;
    }
  });
}

resetGameButtonElements.addEventListener("click", function() {
  squareButtonElements.forEach(squareElement => {
    squareElement.textContent = "";
  });

  isGameOver = false;
  currentPlayerTurn = "X";
  turnCount = 0;
  bannerElement.textContent = `Current Player's Turn: ${currentPlayerTurn}`;
});

function checkForWinner(player) {
  const square1Value = squareButtonElements[0].textContent;
  const square2Value = squareButtonElements[1].textContent;
  const square3Value = squareButtonElements[2].textContent;
  const square4Value = squareButtonElements[3].textContent;
  const square5Value = squareButtonElements[4].textContent;
  const square6Value = squareButtonElements[5].textContent;
  const square7Value = squareButtonElements[6].textContent;
  const square8Value = squareButtonElements[7].textContent;
  const square9Value = squareButtonElements[8].textContent;

  if (
    square1Value === player &&
    square2Value === player &&
    square3Value === player
  ) {
    isGameOver = true;
  } else if (
    square4Value === player &&
    square5Value === player &&
    square6Value === player
  ) {
    isGameOver = true;
  } else if (
    square7Value === player &&
    square8Value === player &&
    square9Value === player
  ) {
    isGameOver = true;
  } else if (
    square1Value === player &&
    square4Value === player &&
    square7Value === player
  ) {
    isGameOver = true;
  } else if (
    square2Value === player &&
    square5Value === player &&
    square8Value === player
  ) {
    isGameOver = true;
  } else if (
    square3Value === player &&
    square6Value === player &&
    square9Value === player
  ) {
    isGameOver = true;
  } else if (
    square1Value === player &&
    square5Value === player &&
    square9Value === player
  ) {
    isGameOver = true;
  } else if (
    square3Value === player &&
    square5Value === player &&
    square7Value === player
  ) {
    isGameOver = true;
  } else if (turnCount === 9) {
    bannerElement.textContent = "TIE GAME!";
  }

  if (isGameOver) {
    bannerElement.textContent = `PLAYER ${player} is the winner!`;
  }
}
