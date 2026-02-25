
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const squareSize = 20; 
let currentColor = "red"; 
let isDrawing = false;
const clearButton = document.getElementById("clear");


const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);


function drawGrid() {
  ctx.strokeStyle = "#ccc"; 
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.clientWidth; x += squareSize) {
    for (let y = 0; y < canvas.clientHeight; y += squareSize) {
      ctx.strokeRect(x, y, squareSize, squareSize);
    }
  }
}
drawGrid();

const colors = ["red","blue","green","yellow","orange","black","white","purple","lightblue","lightgreen","lightpink","lightcoral"];
colors.forEach(color => {
  document.getElementById(color).addEventListener("click", function() {
    currentColor = color;
  });
});


function getSquareCoords(evt) {
  const rect = canvas.getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;
  const col = Math.floor(x / squareSize);
  const row = Math.floor(y / squareSize);
  return {col, row};
}

function fillSquare(col, row) {
  ctx.fillStyle = currentColor;
  ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
  ctx.strokeStyle = "#ccc";
  ctx.strokeRect(col * squareSize, row * squareSize, squareSize, squareSize);
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  const {col, row} = getSquareCoords(e);
  fillSquare(col, row);
});

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return;
  const {col, row} = getSquareCoords(e);
  fillSquare(col, row);
});

canvas.addEventListener("mouseup", e => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", e => {
  isDrawing = false;
});

clearButton.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
});