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

function index(i, j) {
  // checks for out of bounds positions
  if (i < 0 || j < 0 || i > columns - 1 || j > rows - 1) {
    return -1;
  }
  // return index position
  // https://stackoverflow.com/questions/16790584/converting-index-of-one-dimensional-array-into-two-dimensional-array-i-e-row-a
  return i + j * columns;
}

function removeWalls(a, b) {
  // console.log(a);
  //
  let x = a.i - b.i;
  // console.log(a.i, b.i);
  // console.log(x);
  // if a.i - b.i = 1 then a needs it's left wall removed and b needs needs it's right wall removed
  if (x === 1) {
    // wall[3] is left wall
    a.walls[3] = false;
    // wall[1] is right wall
    b.walls[1] = false;
    // if a.i - b.i = -1 then a needs it's right wall removed and b needs it's left wall removed
  } else if (x === -1) {
    // wall[1] is right wall
    a.walls[1] = false;
    // wall[3] is left wall
    b.walls[3] = false;
  }
  // if a.j - b.j = 1 then a needs it's top removed and b needs it's bottom removed
  let y = a.j - b.j;
  if (y === 1) {
    // walls[0] is top wall
    a.walls[0] = false;
    // walls[2] is bottom wall
    b.walls[2] = false;
    // if a.j - b.j = -1 a needs it's bottom removed and b needs it's top removed
  } else if (y === -1) {
    // walls[2] is bottom wall
    a.walls[2] = false;
    // walls[0] is top wall
    b.walls[0] = false;
  }
}
