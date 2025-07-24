const container = document.querySelector(`.container`);
const button = document.querySelector(`button`);

let gridSize = 16;
document.documentElement.style.setProperty("--grid-size", gridSize);
createGrid();

function createGrid() {
  container.replaceChildren();
  let i = 0;
  let cellWidth = container.clientWidth / gridSize;
  while (i < gridSize ** 2) {
    const cell = document.createElement(`div`);
    cell.classList.add("cell");
    cell.style.width = `${cellWidth}px`;
    cell.style.height = `${cellWidth}px`;
    container.appendChild(cell);
    cell.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      colorCell(e);
    });

    cell.addEventListener("mouseover", (e) => {
      if (isMouseDown) {
        colorCell(e);
      }
    });
    i++;
  }
}

button.addEventListener(`click`, () => {
  do {
    gridSize = +prompt("Enter a number between 2 and 100");
  } while (Number.isNaN(gridSize) || gridSize < 2 || gridSize > 100);
  createGrid();
  document.documentElement.style.setProperty("--grid-size", gridSize);
  createGrid();
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
});

function colorCell(e) {
  e.target.style.backgroundColor = `#72A98F`;
}
