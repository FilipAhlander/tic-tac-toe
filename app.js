
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [2, 4, 6],
  [2, 5, 8],
  [0, 4, 8],
  [1, 4, 7]
  ];

let board;
let move = 'X';
let winX = 0;
let winO = 0;
let win = null;
const squares = Array.from(document.querySelectorAll('#board div'));
const message = document.querySelector('h2');
const scoreX = document.querySelector('#score-x');
const scoreO = document.querySelector('#score-o');



document.getElementById('board').addEventListener('click', handleMove);
document.getElementById('reset').addEventListener('click', initialize);


function initialize() {
  board = [
  '', '', '',
  '', '', '',
  '', '', ''
  ];
  win = null;
  render();
};

function render() {
  board.forEach(function(symbol, i) {
  squares[i].textContent = symbol;
  });

  message.textContent = win === 'T' ? "That's a tie!" : win ? win +" wins the game!" : "It's " + move + "'s turn!";

};


function handleMove(event) {
  let i = squares.findIndex(function(square) {
    return square === event.target;
  });

  if((board[i] === '') && win === null) {
    board[i] = move;
    if (move === 'X') {
      move = 'O'
    }
    else {
      move = 'X'
    }

  win = checkWin();

  if (win === 'X') {
    winX += 1;
    scoreX.textContent = "X score: " + winX;
  }
  else if (win === 'O') {
    winO += 1;
    scoreO.textContent = "O score: " + winO;
  }

  render()
  }
};

function checkWin() {
  let winner = null;
  winningCombos.forEach(function(combo) {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
      });
      return winner ? winner : board.includes('') ? null : 'T';
};


initialize();