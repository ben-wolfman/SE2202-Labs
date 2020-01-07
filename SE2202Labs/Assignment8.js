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
    displayInfo() {
        return "Shape with coordinates at: " + this.getX() + ", " + this.getY();
    }
}

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
    displayInfo() {
        return "Square " + super.displayInfo();
    }
}

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
    displayInfo() {
        return "Triangle " + super.displayInfo();
    }
}

//****Task 2****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Define an array of objects that include shape type, coordinates, and defining parameter
let plainObjects = [
    {x:5,y:6},
    {type:'Square', x:7,y:10, length:10},
    {x:8,y:9,type:'Triangle', height:50},
];

//Declares a function that takes array of objects, and returns an array with new shape objects
let transformPlainObjectsToShapes = function(data){
    //Define empty shapes array
    let shapes = [];
    let s;

    //Cycle through each object in data array, and use switch statement to choose option
    for(let d of data){
        //If the object type is undefined, create a new generic shape with coordinates
        //If the object type is square, create new square object with coordinates and length
        //If the object type is triangle, create new triangle object with coordinates and height
        switch(d.type){
            case undefined:
                s = new Shape(d.x, d.y);
                break;
            case 'Square':
                s = new Square(d.x, d.y, d.length);
                break;
            case 'Triangle':
                s = new Triangle(d.x, d.y, d.height);

        }
        //Add new defined shape to shapes array
        shapes.push(s);
    }
    //Return the final shapes array
    return shapes;
};

//Define new binding with transformation function called with plainObjects array
let results = transformPlainObjectsToShapes(plainObjects);

//Cycles through new shapes array and displays info for each object
for(let s of results) {
    console.log(s.displayInfo());
}

//****Task 3****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=====================================================");

//Use the .map method to update each object element in the plainObjects array based on the type
results = plainObjects.map(object => (object.type === undefined)? new Shape(object.x, object.y):
    (object.type === 'Square')? new Square(object.x, object.y, object.length):
    new Triangle(object.x, object.y, object.height));

//Cycles through new mapped array and displays info for each object
for(let s of results) {
    console.log(s.displayInfo());
}