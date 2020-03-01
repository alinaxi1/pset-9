///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27]
]
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let keepScoreX = 0;
let keepScoreO = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
  ];
  turn = "Red";
  win = null;

  render();
}

function firstRed() {
  document.getElementById('turnButton').innerHTML = "Turn: Red";
  turn = "Red";
}

function firstYellow() {
  document.getElementById('turnButton').innerHTML = "Turn: Yellow";
  turn = "Yellow";
}


function render() {
  board.forEach(function (mark, index) {
		if (squares[index].style.backgroundColor == "" && index >= 35) {
			squares[index].style.backgroundColor = mark;
	} else if (squares[index].style.backgroundColor != "" && index <= 35) {
			squares[index].style.backgroundColor = mark;
	}
	});
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "Yellow" ? "Red" : "Yellow";
      win = getWinner();

      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  if (winner === "Red") {
    keepScoreX++;
    document.getElementById('redScore').innerHTML = keepScoreX;
  } else if (winner === "Yellow") {
    keepScoreO++;
    document.getElementById('yellowScore').innerHTML = keepScoreO;
  }

  return winner ? winner : board.includes("") ? null : "T";
}
