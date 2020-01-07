//****Task 1****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Define Shape class
class Shape {
    constructor(newX, newY) {

        //__x, __y are the private members of the Shape class
        let __x;
        let __y;

        //Setter function for x
        this.setX = function(x) {
            //To avoid assigning x coordinate to a negative number
            __x = (x>0)?x:0;
        };
        //Getter function for x
        this.getX = function() {
            return __x;
        };
        //Setter function for y
        this.setY = function(y) {
            //To avoid assigning y coordinate to a negative number
            __y = (y>0)?y:0;
        };
        //Getter function for y
        this.getY = function() {
            return __y;
        };

        //we will pass the x and y coordinates to the private members using the methods we created
        this.setX(newX);
        this.setY(newY);
    }

    //Function to print coordinates of point
    showPoint() {
        console.log(this.getX() + ", " + this.getY());
    }
}

//Test the shape class
let s = new Shape(3, 6);
s.showPoint();

//If we want to change the values of x and y
s.setX(-5);
s.setY(8);

console.log("The new x and y values are: " + s.getX() + ", " + s.getY());

//check if we can access the private members
console.log(s.__x);


//****Task 2****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Create a subclass called square
class Square extends Shape {
    //should have a constructor method
    constructor(newX, newY, sideLength) {

       super(newX, newY);

        let length;

        this.setL = function (x) {
            length = (x>0?x:1);
        };
        this.getL = function () {
            return length;
        };
        this.setL(sideLength);
    }
}

let sq = new Square (5,6,8);
console.log("The side length of the square is: " + sq.getL());

//Create a subclass called triangle
class Triangle extends Shape {
    //should have a constructor method
    constructor(newX, newY, triHeight) {

        let height;

        super(newX, newY);
        this.setH = function (x) {
            height = (x>0?x:1);
        };
        this.getH = function () {
            return height;
        };
        this.setH(triHeight);
    }
}

//Create new triangle object from the class
let tri = new Triangle(2,7,5);
//Get the height
console.log("The height of the triangle is: " + tri.getH());

//****Task 3****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Define a new shape class and new subclasses so I can demonstrate task 3 separately
class newShape {
    constructor(newX, newY) {

        //__x, __y are the private members of the Shape class
        let __x;
        let __y;

        //Setter function for x
        this.setX = function(x) {
            //to avoid assigning x coordinate to a negative number
            __x = (x>0)?x:0;
        };
        //Getter function for x
        this.getX = function() {
            return __x;
        };
        //Setter function for y
        this.setY = function(y) {
            __y = (y>0)?y:0;
        };
        //Getter function for y
        this.getY = function() {
            return __y;
        };

        //we will pass the x and y coordinates to the private members using the methods we created
        this.setX(newX);
        this.setY(newY);
    }

    showPoint() {
        console.log(this.getX() + ", " + this.getY());
    }

    //Declare horizontal offset function
    createHorizontalOffset(n) {
        let offset = "";
        if (n < 0 || n === undefined) {
            n = this.getX();
        }
        for (let i = 0; i < n; i++) {
            offset += " ";
        }
        return offset;
    }

    //Declare draw function
    draw() {
        for (let i = 0; i < this.getY(); i++) {
            console.log();
        }
    }
}

//Create a new shape object from the class
let shape = new newShape(6, 7);

//Create a square subclass
class newSquare extends newShape {
    //should have a constructor method
    constructor(newX, newY, sideLength) {

        super(newX, newY);

        let length;
        this.setL = function (x) {
            length = (x>0?x:1);
        };
        this.getL = function () {
            return length;
        };
        this.setL(sideLength);
    }
    //Overrides the draw function of the superclass
    draw() {
        super.draw();
        let string = "";
        for (let i = 0; i < this.getL(); i++) {
            string += "* "
        }
        for (let j = 0; j < this.getL(); j++) {
            console.log(this.createHorizontalOffset() + string);
        }
    }

}

//Create a new square object
let sq2 = new newSquare (5,6,8);
//Call the draw function
sq2.draw();

//Create a triangle subclass
class newTriangle extends newShape {
    //should have a constructor method
    constructor(newX, newY, triHeight) {

        let height;

        super(newX, newY);
        this.setH = function (x) {
            height = (x>0?x:1);
        };
        this.getH = function () {
            return height;
        };
        this.setH(triHeight);
    }
    //Overrides the draw function of the superclass
    draw() {
        super.draw();
        let string = "";
        let result = "";
        for (let i = 0; i < this.getH(); i++) {
            string += "* ";
            for (let j = 0; j < this.getH(); j++) {
                result = this.createHorizontalOffset() + string;
            }
            console.log(result);
        }
    }
}

//Create new triangle object
let tri2 = new newTriangle(3,7,5);
//Call the draw function
tri2.draw();