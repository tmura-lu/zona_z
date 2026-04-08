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

let board = [];

function createGrid() {
  gameArea.innerHTML = "";
  board = [];

  for (let y = 0; y < size; y++) {
    let row = [];

    for (let x = 0; x < size; x++) {
      row.push("empty");

      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${x}-${y}`;

      gameArea.appendChild(cell);
    }

    board.push(row);
  }
}

function render() {
  // limpa todas as células
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.className = "cell";
  });

  // desenha radiação
  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === "radiation") {
        const cell = document.getElementById(`cell-${x}-${y}`);
        cell.classList.add("radiation");
      }
    });
  });

  // adiciona o zumbi na posição atual
  const cell = document.getElementById(`cell-${zombie.x}-${zombie.y}`);
  if (cell) cell.classList.add("zombie");
}

function moveZombie(dx, dy) {
  if (gameState !== GAME_STATE.PLAYING) return;

  const newX = zombie.x + dx;
  const newY = zombie.y + dy;

  if (newX < 0 || newX >= size || newY < 0 || newY >= size) return;

  board[zombie.y][zombie.x] = "radiation";

  zombie.x = newX;
  zombie.y = newY;

  render();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") moveZombie(0, -1);
  if (e.key === "ArrowDown") moveZombie(0, 1);
  if (e.key === "ArrowLeft") moveZombie(-1, 0);
  if (e.key === "ArrowRight") moveZombie(1, 0);
});

createGrid();
render();
