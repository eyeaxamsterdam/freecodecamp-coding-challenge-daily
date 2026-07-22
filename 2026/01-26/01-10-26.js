/*
Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:

"X wins" if player X has three in a row.
"O wins" if player O has three in a row.
"Draw" if no player has three in a row.
*/

function ticTacToe(board) {
  
  for (let row of board) {
    if (row[0] === row[1] && row[2] === row[1]) {
      console.log(row[0] + ' wins')
      return row[0] + ' wins'
    }  
  }

  for (let [i, spot] of board[0].entries()) {
    if (spot === board[1][i] && spot === board[2][i]) {
      console.log(spot + ' wins')
      return spot + ' wins'
    }
  }

  if ((board[1][1] === board[0][0] && board[1][1] === board[2][2]) || (board[1][1] == board[0][2] && board[1][1] === board[2][0])) {
    console.log(board[1][1] + ' wins')
    return board[1][1] + ' wins'
  }
  console.log('Draw')
  return 'Draw'
}

ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) //should return "X wins".
ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) //should return "O wins".
ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) //should return "Draw".
ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]) //should return "O wins".
ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]) //should return "X wins".
ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]) //should return "Draw".