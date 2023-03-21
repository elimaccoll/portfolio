const tiles = document.getElementById("tiles");
const tilesContainer = document.getElementById("tiles-container");
const tileSize = 10;
const minTiles = 50;

let columns = Math.min(
  Math.floor(document.body.clientWidth / tileSize),
  minTiles
);
let rows = Math.min(
  Math.floor(document.body.clientHeight / tileSize),
  minTiles
);

let count = -1;
const colors = [
  "rgb(229, 57, 53)",
  "rgb(253, 216, 53)",
  "rgb(244, 81, 30)",
  "rgb(76, 175, 80)",
  "rgb(33, 150, 243)",
  "rgb(156, 39, 176)",
];

const grads = [
  "linear-gradient(to right, rgb(98, 0, 234), rgb(236, 64, 122), rgb(98, 0, 234));",
  "linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255), rgb(0, 0, 0));",
];

const handleOnClick = (index) => {
  count = count + 1;
  anime({
    targets: ".tile",
    background: colors[count % (colors.length - 1)],
    // background: grads[count % (grads.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    tiles.appendChild(createTile(index));
  });
};

const createGrid = () => {
  tiles.innerHTML = "";

  columns = Math.min(
    Math.floor(document.body.clientWidth / tileSize),
    minTiles
  );
  rows = Math.min(Math.floor(document.body.clientHeight / tileSize), minTiles);

  tiles.style.setProperty("--columns", columns);
  tiles.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();
window.onresize = () => createGrid();
