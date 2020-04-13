// https://www.youtube.com/watch?v=HyK_Q5rrcr4&t=332s
// https://www.youtube.com/watch?v=D8UgRyRnvXU
// https://www.youtube.com/watch?v=8Ju_uxJ9v44&t=108s
// https://www.youtube.com/watch?v=_p5IH0L63wo&t=488s

let columns, rows;
let cell = 40;
let grid = [];
let currentCell;
let backTrack = [];

// sets up a 10 by 10 canvas
function setup() {
    // canvas 400 x 400
  createCanvas(400, 400);
    //sets columns and rows to the value of width or height /w which is 10
  columns = floor(width / cell);
  rows = floor(height / cell);
  // console.log(columns)
    // nested loop, for every row go through every column
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
    // creates a cell object for every i and j iteration ex: Cell(0,0) Cell(0,1) Cell(0,2)... etc
      let cell = new squareBuilder(i, j);
      // each cell gets pushed into the grid[] array
      grid.push(cell);
      // console.log(grid);
    }
  } 
  // sets currentCell to the first index of the grid[] array (0,0)
  currentCell = grid[0];
}

