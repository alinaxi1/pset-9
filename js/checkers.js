const squares = Array.from(document.querySelectorAll("#board div"));

let board;
let turn;
let win;
let click = 0
let x_wins_count = 0
let o_wins_count = 0
let switch_turn_count = 0
let target;
let division;
let outer_square;
let bot_right;
let bot_left;
let top_right;
let top_left;
let toadd;
let toremove;
let target2;
let outer_square1;
const message = document.querySelector("h2");
let checker_board = document.getElementById("board");
document.getElementById("board").onclick = takeTurn;

window.onload = init()

function init() {
  turn = "2"
  board = ["", "1", "", "1", "", "1", "", "1",
           "1", "", "1", "", "1", "", "1", "",
           "", "1", "", "1", "", "1", "", "1",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "2", "", "2", "", "2", "", "2", "",
           "", "2", "", "2", "", "2", "", "2",
           "2", "", "2", "", "2", "", "2", "",]
  for(i = 0; i < 25; i++) {
    if(Math.floor(i/8) % 2 == 0 && i < 24) {
      if (i % 2 != 0) {
        createWhite();
      }
    }
    else if (Math.floor(i/8) % 2 != 0 && i < 24) {
      if (i % 2 == 0) {
        createWhite();
      }
    }
  }
  for(i = 62; i > 39; i--) {
    if(Math.floor(i/8) % 2 == 0 && i > 37) {
      if (i % 2 != 0) {
        createRed();
      }
    }
    else if (Math.floor(i/8) % 2 != 0 && i > 37) {
      if (i % 2 == 0) {
        createRed();
      }
    }
  }
}
function render() {
  for (i = 1; i <= 63; i++) {
    if (board[i] == "1" && !squares[i].innerHTML.includes("<div")) {
      division = document.createElement("div")
      outer_square = document.getElementById(squares[i].id)
      division.id = i
      division.style.height = "50px"
      division.style.width = "50px"
      division.style.borderRadius = "50%"
      division.style.backgroundColor = "lightgray"
      outer_square.append(division);
    }
    if (board[i] == "2" && !squares[i].innerHTML.includes("<div")) {
      division = document.createElement("div")
      outer_square = document.getElementById(squares[i-1].id)
      division.id = i
      division.style.height = "50px"
      division.style.width = "50px"
      division.style.borderRadius = "50%"
      division.style.backgroundColor = "red"
      outer_square.append(division);
    }
    if (board[i] == "") {
      console.log("hi")
      outer_square = document.getElementById(squares[i].id)
      outer_square.innerHTML = ""
    }
  }
  console.log(board)
}
function takeTurn(e) {
  target = e.target
  if(target.innerHTML.includes("<div")) {
    bot_right = Number(target.id) + 10;
    bot_left = Number(target.id) + 8;
    top_right = Number(target.id) - 8;
    top_left = Number(target.id) - 10;
    console.log(bot_right)
    console.log(bot_left)
    console.log(top_right)
    console.log(top_left)
    if(bot_right != undefined && bot_right > 0 && bot_right < 64) {
      document.getElementById(squares[bot_right].id).onclick = move;
      console.log("bot_right")
    }
    if(bot_left != undefined && bot_left > 0 && bot_left < 64) {
      document.getElementById(squares[bot_left].id).onclick = move;
      console.log("bot_left")
    }
    if(top_right != undefined && top_right > 0 && top_right < 64) {
      document.getElementById(squares[top_right].id).onclick = move;
      console.log("top_right")
    }
    if(top_left != undefined && top_left > 0 && top_left < 64) {
      document.getElementById(squares[top_left].id).onclick = move;
      console.log("top_left")
    }
  }
}

function createRed() {
  division = document.createElement("div")
  outer_square = document.getElementById(squares[i].id)
  division.id = i
  division.style.height = "50px"
  division.style.width = "50px"
  division.style.borderRadius = "50%"
  division.style.backgroundColor = "red"
  outer_square.append(division);
}

function createWhite() {
  division = document.createElement("div")
  outer_square = document.getElementById(squares[i].id)
  division.id = i
  division.style.height = "50px"
  division.style.width = "50px"
  division.style.borderRadius = "50%"
  division.style.backgroundColor = "lightgray"
  outer_square.append(division);
}

function move(g) {
  target2 = g.target
  if(board[target2.id] == "") {
    if (turn = "1") {
      board[target2.id] = "1"
      board[target.id] = ""
      turn = "2"
    }
    if (turn = "2") {
      board[target2.id] = "2"
      board[target.id] = ""
      turn = "1"
    }
  }
  render();
}
