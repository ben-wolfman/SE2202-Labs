//****Task 1****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Creates a prototype object that has a "real" and "imaginary" component of a complex number
let complexNumberPrototype = {
  real: 0,
  img: 0,
  print: function () {
      console.log(this.real+"+"+this.img+"i");
  }
};

//Function to create complex number object using the complexNumberPrototype template
function createComplexNumber (r, i) {
    let complex = Object.create(complexNumberPrototype);
    complex.real = r;
    complex.img = i;

    return complex;
}

//Creates a complex number with real value 4 and imaginary value 6 using the createComplexNumber function
let compObject = createComplexNumber(4, 6);

//Prints the complex number
compObject.print();

//Declare a constructor function that takes real and imaginary component
function ConstructorFunction(r, i) {
    this.real = r;
    this.img = i;
    this.print = function () {
        console.log(this.real + "+" + this.img+"i");
    }
}

//Creates a new complex number using the constructor function
let newObject = new ConstructorFunction(2, 9);

//Prints the new complex number
newObject.print();
console.log();

//****Task 2****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Declares a new constructor function, but with new addition, subtraction, division, and multiplication functions
function ConstructorFunction2(r, i) {
    this.real = r;
    this.img = i;
    this.print = function () {
        console.log(this.real + "+" + this.img+"i");
    };
    //Addition function
    this.add = function (object2) {
        let real2 = r + object2.real;
        let img2 = i + object2.img;
        //Creates new object with sum of real and imaginary components
        return new ConstructorFunction2(real2, img2);
    };
    //Subtraction function
    this.subtraction = function (object2) {
        let real2 = r - object2.real;
        let img2 = i - object2.img;
        //Creates new object with difference of real and imaginary components
        return new ConstructorFunction2(real2, img2);
    };
    //Division function
    this.division = function (object2) {
        let real2 = r / object2.real;
        let img2 = i / object2.img;
        //Creates new object with quotient of real and imaginary components
        return new ConstructorFunction2(real2, img2);
    };
    //Multiplication function
    this.multiplication = function (object2) {
        let real2 = r * object2.real;
        let img2 = i * object2.img;
        //Creates new object with product of real and imaginary components
        return new ConstructorFunction2(real2, img2);
    };
}

//Creates two new complex numbers using the constructor function
let newObject2 = new ConstructorFunction2(2, 15);
let newObject3 = new ConstructorFunction2(1, 5);

//Performs addition, subtraction, division, multiplication operations on objects
let newObjectSum = newObject2.add(newObject3);
let newObjectSub = newObject2.subtraction(newObject3);
let newObjectDiv = newObject2.division(newObject3);
let newObjectMul = newObject2.multiplication(newObject3);

//Prints out the resultant objects
newObjectSum.print();
newObjectSub.print();
newObjectDiv.print();
newObjectMul.print();