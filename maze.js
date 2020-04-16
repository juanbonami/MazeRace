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

function squareBuilder(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  // checkNeighbors tells the current cell where to move by checking for any surrounding neighbors that haven't been visited yet.
  this.checkNeighbors = function () {
    let neighbors = []; // array of cells that haven't been visited
    //console.log(neighbors);
    // topCell = grid[i][j-1]; if i had a 2d array but i have a 1d array therefore 1d to 2d index conversion: i + j * columns;
    let topCell = grid[index(i, j - 1)];
    let rightCell = grid[index(i + 1, j)];
    let bottomCell = grid[index(i, j + 1)];
    let leftCell = grid[index(i - 1, j)];

    // checks if topcell is a real thing and it hasn't been visited, push topcell into neighbors array
    if (topCell && !topCell.visited) {
      neighbors.push(topCell);
      console.log(topCell);
    }
    // checks if rightcell is a real thing and it hasn't been visited, push rightcell into neighbors array
    if (rightCell && !rightCell.visited) {
      neighbors.push(rightCell);
    }
    // checks if bottomcell is a real thing and it hasn't been visited, push bottomcell into neighbors array
    if (bottomCell && !bottomCell.visited) {
      neighbors.push(bottomCell);
    }
    // checks if leftcell is a real thing and it hasn't been visited, push leftcell into neighbors array
    if (leftCell && !leftCell.visited) {
      neighbors.push(leftCell);
    }

    if (neighbors.length > 0) {
      // picks a random value
      let r = floor(random(0, neighbors.length));
      // returns that random neighbor
      return neighbors[r];
      // otherwise return undefined
    } else {
      return undefined;
    }
  };
  this.highlight = function () {
    let x = this.i * cell;
    let y = this.j * cell;
    // noStroke();
    // colors the current cell for the user to see it's position
    // fill(0, 0, 255, 100);
    fill("rgb(0,255,0)");
    rect(x, y, cell, cell);
  };

  this.show = function () {
    // updates the cordinates to fit in canvas
    let x = this.i * cell;
    let y = this.j * cell;
    stroke(255);
    // checks if every index in the walls array is a truthy value to build the walls
    if (this.walls[0]) {
      // draws top line
      // x and y is a cordinate that connects a line to cordinate x+w,y
      line(x, y, x + cell, y);
    }
    if (this.walls[1]) {
      // draws right line
      line(x + cell, y, x + cell, y + cell);
    }
    if (this.walls[2]) {
      // draws bottom line
      line(x + cell, y + cell, x, y + cell);
    }
    if (this.walls[3]) {
      // draws left line
      line(x, y + cell, x, y);
    }
  };
}
