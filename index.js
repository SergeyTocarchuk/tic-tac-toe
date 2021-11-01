let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let isGameActive = true;

const marks = Array.from(document.querySelectorAll('.mark'));

marks.forEach( (mark, index) => {
  mark.addEventListener('click', () => userAction(mark, index));
})

function userAction(mark, index){
  mark.innerText = currentPlayer;
  mark.classList.add(`player${currentPlayer}`);
  saveBoardIndex(index);
  changePlayer();
}

function saveBoardIndex(index){
  board[index] = currentPlayer;
}

function changePlayer(){
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Indexes within the board
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]

const winningConditions =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];