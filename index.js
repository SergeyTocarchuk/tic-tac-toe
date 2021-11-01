let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let isGameActive = true;

const marks = Array.from(document.querySelectorAll('.mark'));
const announcer = document.getElementById('announce-result');
const playerTurn = document.getElementById('player-turn');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

marks.forEach( (mark, index) => {
  mark.addEventListener('click', () => userAction(mark, index));
})

function userAction(mark, index){
  if( isValidAction(mark) && isGameActive ){
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
  playerTurn.classList.remove(`player${currentPlayer}`);
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  playerTurn.innerText = currentPlayer;
  playerTurn.classList.add(`player${currentPlayer}`);
}

function isValidAction(mark){
  if( mark.innerText === 'X' || mark.innerText === 'O' ){
    return false;
  }
  return true;
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
  if( !board.includes('') ){
    announceResult('tie');
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
  announcer.classList.remove('hide');
}

function reset(){
  isGameActive = true;
  board = ["", "", "", "", "", "", "", "", ""];
  announcer.classList.add('hide');
  
  marks.forEach(mark => {
    mark.innerText = '';
    mark.classList.remove('playerX');
    mark.classList.remove('playerO');
  })
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