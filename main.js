// Selection Part
const result = document.querySelector(".result");
const winingScore = document.querySelector(".wining-score span");
const player1 = document.querySelector(".player1 span");
const player2 = document.querySelector(".player2 span");
const form = document.querySelector("form");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
let btn1Click;
let btn2Click;
let winScore;
let player1Score;
let player2Score;
let gameOver;
// btn1.setAttribute("disabled", "disabled");
// btn1.setAttribute("disabled", "disabled");
// disabbled button
function disabled() {
  btn1.setAttribute("disabled", "disabled");
  btn2.setAttribute("disabled", "disabled");
}
disabled();
// setScore
function setScore() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    setInitialValue();
    setInitialDom();
    input.textContent = " ";
    if (
      !input.value ||
      Number(input.value) !== Number(input.value) ||
      input.value < 10
    ) {
      alert("Please Enter Valid Number or Big Number");
    } else {
      winingScore.textContent = input.value;
    }
  });
}
setScore();

function setInitialPlayer() {
  const activePlayer = ["btn1Click", "btn2Click"];
  const num = Math.floor(Math.random() * activePlayer.length);
  const player = activePlayer[num];

  return player;
}

function setInitialValue() {
  winScore = 10;
  player1Score = 0;
  player2Score = 0;
  gameOver = false;
  if (setInitialPlayer() === "btn1Click") {
    btn1Click = true;
    btn2Click = false;
  } else {
    btn1Click = false;
    btn2Click = true;
  }
}
function resetInput() {
  input.value = "";
}
resetInput();

function setInitialDom() {
  winingScore.textContent = winScore;
  player1.textContent = player1Score;
  player2.textContent = player2Score;
  if (btn1Click) {
    btn1.removeAttribute("disabled");
    btn2.setAttribute("disabled", "disabled");
  } else {
    btn2.removeAttribute("disabled");
    btn1.setAttribute("disabled", "disabled");
  }
}

btn1.addEventListener("click", () => {
  const increase = Math.floor(Math.random() * 4) + 1;
  player1Score += increase;
  player1.textContent = player1Score;
  btn1.setAttribute("disabled", "disabled");
  btn2.removeAttribute("disabled");
  if (player1Score >= winScore) {
    gameOver = true;
    result.textContent = "Winning Player 1";
    result.setAttribute("color", "red");
    disabled();
  }
});

btn2.addEventListener("click", () => {
  const increase = Math.floor(Math.random() * 4) + 1;
  player2Score += increase;
  player2.textContent = player2Score;
  btn2.setAttribute("disabled", "disabled");
  btn1.removeAttribute("disabled");
  if (player2Score >= winScore) {
    gameOver = true;
    result.textContent = "Wining Player 2";
    result.setAttribute("color", "red");
    disabled();
  }
});
// reset button.....................................reset button.

reset.addEventListener("click", () => {
  setInitialValue();
  setInitialDom();
  resetInput();
});
// gameOver
