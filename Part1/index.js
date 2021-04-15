// console.log('Hello World')

const boxes = document.querySelectorAll(".box");
const playerSpan = document.getElementById('player');

let board = [null, null, null, null, null, null,null,null,null];

function play(clickedId) {

  const clickedElement = document.getElementById(clickedId);
  if(playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  // clickedElement.onclick = null;
  checkBoardState(board);
}

function checkBoardState(board) {
  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midCenter = board[4];
  const midRight = board[5];
  const botLeft = board[6];
  const botCenter = board[7];
  const botRight = board[8];

  console.log({board});

  if (topLeft !== null && topLeft === topCenter && topLeft === topRight) {
    alertWinner(topLeft);
    return;
  } else if (topLeft !== null && topLeft === midLeft && topLeft === botLeft) {
    alertWinner(topLeft);
    return;
  } else if (topLeft !== null && topLeft === midCenter && topLeft === botRight) {
    alertWinner(topLeft);
    return;
  } else if (topLeft !== null && topLeft === midLeft && topLeft === botLeft) {
    alertWinner(topLeft);
    return;
  } else if (topCenter !== null && topCenter === midCenter && topCenter === botCenter) {
    alertWinner(topCenter);
    return;
  } else if (topRight !== null && topRight === midCenter && topRight === botLeft) {
    alertWinner(topRight);
    return;
  } else if (topRight !== null && topRight === midRight && topRight === botRight) {
    alertWinner(topRight);
    return;
  } else if (midLeft !== null && midLeft === midCenter && midLeft === midRight) {
    alertWinner(midLeft);
    return;
  } else if (botLeft !== null && botLeft === botCenter && botLeft === botRight) {
    alertWinner(botLeft);
    return;
  } 
}

function resetBoard() {
  for(let i=0; i<boxes.length; i++){
    boxes[i].innerText = null;
    // boxes[i].onclick = `play(${i})`
  }
  board = [null, null, null, null, null, null,null,null,null];
  playerSpan.innerText = 'X';
}

function alertWinner(name) {
  alert(`${name} is the winner!`);
  resetBoard();
}




// const winningCons = [
//   [0,1,2],
//   [0,4,8],
//   [0,3,6],
//   [1,4,7],
//   [2,4,6],
//   [2,5,8],
//   [3,4,5],
//   [6,7,8]
// ];

