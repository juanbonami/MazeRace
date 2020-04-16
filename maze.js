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

function draw() {
  background(51);
  // loops through the length of the grid array
  for (let i = 0; i < grid.length; i++) {
    // each iteration calls the show() function
    grid[i].show();
  }
  // current cell is visited
  currentCell.visited = true;
  currentCell.highlight();

  frameRate(15);
  // https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker
  // STEP 1
  // next is assigned the value of current cell w function call
  let next = currentCell.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    // push current cell to the stack array
    backTrack.push(currentCell);

    // STEP 3
    // removes wall in between currentCell and next cell
    removeWalls(currentCell, next);
    // console.log(currentCell, next);

    // STEP 4
    currentCell = next;
    // if the stack array is not empty grab a cell from the stack and make it the current
  } else if (backTrack.length > 0) {
    // if checkNeibors returns undifined, pop() a cell from the stack array and make it the current cell. Repeats process if undifined is returned.
    currentCell = backTrack.pop();
  }
}
