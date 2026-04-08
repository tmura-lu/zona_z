const size = 8;
const gameArea = document.getElementById("game-area");
const GAME_STATE = {
  PLAYING: "playing",
  WIN: "win",
  LOSE: "lose",
};
const zombie = {
  x: 0,
  y: 0,
};

let gameState = GAME_STATE.PLAYING;

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

function render() {
  // limpa todas as células
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("zombie");
  });

  // adiciona o zumbi na posição atual
  const cell = document.getElementById(`cell-${zombie.x}-${zombie.y}`);
  cell.classList.add("zombie");
}

createGrid();
render();
