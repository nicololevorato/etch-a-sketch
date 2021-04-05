const grid = document.getElementById("grid");
const size = 70;
grid.style.setProperty("--size", size);
//Make an n*n grid
function makeGrid() {
  var n = prompt("Please enter number of cells", "Number");
  grid.style.setProperty("grid-template-columns", `repeat(${n},${size / n}vh)`);
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.style.setProperty("width", `${size / n}vh`);
    cell.style.setProperty("height", `${size / n}vh`);
    cell.onmouseover = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      cell.style.background = "#" + randomColor;
    };
    grid.appendChild(cell).className = "cell";
  }
}
const button = document.createElement("center");
const resetBtn = document.createElement("button");
resetBtn.onclick = () => {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].remove();
  }
  makeGrid();
};
resetBtn.appendChild(document.createTextNode("Reset"));
document.body.appendChild(button).className = "button";
button.appendChild(resetBtn);
makeGrid();
