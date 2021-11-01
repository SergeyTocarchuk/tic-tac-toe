let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let isGameActive = true;

const marks = Array.from(document.querySelectorAll('.mark'));
const announcer = document.getElementById('announce-result');

marks.forEach( (mark, index) => {
  mark.addEventListener('click', () => userAction(mark, index));
})

function userAction(mark, index){
  if( isGameActive ){
    mark.innerText = currentPlayer;
    mark.classList.add(`player${currentPlayer}`);
    saveBoardIndex(index);
    resultValidation();
    changePlayer();
  }
}

function saveBoardIndex(index){
  board[index] = currentPlayer;
}

function changePlayer(){
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resultValidation(){
  let roundWon = false;
  for( let i = 0; i <= 7; i++ ){
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if( a === '' || b === '' || c === '' ){
      continue;
    }
    if( a === b && b === c ){
      roundWon = true;
      break;
    }
  }
  if( roundWon ){
    announceResult(currentPlayer === 'X' ? 'X' : 'O');
    isGameActive = false;
    return;
  }
}

function announceResult(result){
  if( result ===  'X' ){
    announcer.innerHTML = `Player <span class="playerX">X</span> Won`;
  } else if (result === 'O' ){
    announcer.innerHTML = `Player <span class="playerO">O</span> Won`;
  } else {
    announcer.innerText = 'Tie';
  }
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