const board = Array(9).fill(null);
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (!board[index] && !checkWinner()) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
