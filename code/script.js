const size = 8;
const gameArea = document.getElementById("game-area");

function createGrid() {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.id = `cell-${x}-${y}`;

      gameArea.appendChild(cell);
    }
  }
}

createGrid();
