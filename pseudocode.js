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
// In order to build the top, right, bottom, left of each aquare we need to know that the cordinates increase as we move to the right and down, while moving to the left and up the cordinates decrease
// 
// we use the stroke() method to draw the lines light or dark
// 