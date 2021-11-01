let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let isGameActive = true;

const marks = Array.from(document.querySelectorAll('.mark'));

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