// create boilerplate for HTML
// create js file, link the two 
// create 2 divs for the user to manipulate 
// add css to them
// create canvas for the users to interact in
// create components for the user to manipulate 
// begin with the layout of the maze

// button = start();
// userInput1 = get input;
// userInput2 = get input;

// var = left keycode
// var = up keycode
// var = right keycode
// var = down keycode 

// var c = canvas get context 
// c.width = full screen
// c.height = full screen 

// userOne = new component(set width and height "red", set psotion on screen)
// userTwo = new component(set width and height "blue", set psotion on screen)

// function = moveUser => {
//     moveUser.speedY += 1px;
//     moveUser.speedY -= 1px;
//     moveUser.speedX += 1px;
//     moveUser.speedX -= 1px;

// }

// function (userOne)
// function(userTwo)

// create maze on Canvas;

// function collisionDetection() {
    // code here
// }


// **********************************************

// GENERATING RANDOM MAZE

// import P5js library for drawing functions
// declare 5 variables
// the rows, columns, cell, grid, currentCell, and backTracker
// create a 400 x 400 canvas 
// cell gets a value if 40
// columns and rows get the value of the width and height divided by the cell
// create nested for loop. For every row go through every column.
// for every column and row cordinate create an object and push it into grid array
// when loop ends we should have a total of 100 objects in grid array
// create the draw function
// sets background
// loop through the grid array and each elemnt calls a function called show() that gets created later
// create a function squareBuilder() that takes in the cordinates and that builds a squre on the canvas using the line() function 
// why build individual lines to build a square when we could simply use the rect() method? It's because we want to iterate through the grid on canvas and randomly knock down some of the walls we build in order to build the maze
// inside squareBuilder() declare an array called walls with 4 boolean values of true
// this will help us turn the walls off or on
// furthermore we can declare a variable to determine wich squares have been visited
// next we create a the function show() we used above to build each square and hence the entire grid on canvas
// the show() function will be declared inside the squareBuilder() function
// the i and j variables that get passed will be individually multiplied by the cell and stored in let variable x and let variable y 
// why do we muiltiply the cordinated by the value of cell? The value of cell will be the size of each individual square we're building. For example the first cordinates we got for the nested for loop in the setup() function are (0,0) 
// In order to build the top, right, bottom, left of each aquare we need to know that the cordinates increase in ascending order as we move to the right and down, while moving to the left and up the cordinates decrease in descending order
// as a reminder x is the column and y is the row
// to build top line we need to draw a line from (x,y) to (x + cell, y)
// to build right line we need to draw a line from (x + cell, y) to (x + cell, y + cell)
// to build bottom line we need to draw a line from (x + cell, y + cell) to (x, y + w)
// to build the left line we need to draw a line from (x, y + w) to (x,y)
// there's a wireframe on this in the wireframes folder
// we use the stroke() method to draw the lines light or dark
// next we make chained if statements
// first if statement checks if the first index[0] of the walls array is a truthy value, if so draw line(x, y, x + cell, y)
// second if statement checks if the first index[1] of the walls array is a truthy value, if so draw line(x + cell, y, x + cell, y + cell)
// third if statement checks if the first index[2] of the walls array is a truthy value, if so draw line(x + cell, y + cell, x, y + cell)
// fourth if statement checks if the first index[3] of the walls array is a truthy value, if so draw line(x, y + cell, x, y)
// the last if statement checks if the square has been visited, if it returns a truthy value we employ the noStroke method to undo the walls, we also want to keep track of which squares have been visited so the fill method is used (255, 0, 255, 100), also draw a rectangle for every visited square rect(x, y, cell, cell) or (cordinate 1, cordinate 2, heigth, width)
// We also want to keep track of the current square or cell for the user
// a function called highlight is created 
// inside the block i and j will be multiplied by cell and store one value in variable x and the other in y
// next we use fill('rgb(0,255,0)') rect(x, y, cell, cell)
// Next we want to be able to check the current cell's neighbors to see if first they are actually there and to check if they have been visited or not
// create a function called checkNeighbors()
// first declare an array called neighbors
// there's a wireframe for this part in the wireframe folders
// the current square or cell needs to check it's top, right, bottom, and left neighbors.
// to find these neighbors we need to convert the 1 dimentional array grid[] into a 2 demintional array, formula for this on stackoverflow https://stackoverflow.com/questions/16790584/converting-index-of-one-dimensional-array-into-two-dimensional-array-i-e-row-a
// since we're using this multiple times let's create a function for it to simplyfy our code.
// create function index(i,j) function takes 2 arguments and returns the 2D array conversion.
// also function checks for any indexes that may be out of bounds.
// the index for the top,right,bottom,left will be stored in a variable
