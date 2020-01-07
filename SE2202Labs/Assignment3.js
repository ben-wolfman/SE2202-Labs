//****Task 1****

//Declare a function to convert decimal to binary using a loop
let decimalToBin = function (num) {

    //Declare a blank string that will be filled with new remainders
    let binFormat = "";

    //for loop to populate binFormat with new remainders as long as the new result is greater or equal to 1
    for (let n = num; n >= 1; n = Math.trunc(n/2)) {

        //Adds new remainder to existing string
        binFormat = (n%2) + binFormat;

    }
    //Returns the final binary representation
    return binFormat;
};

//Declare a function to convert decimal to binary using recursion
let decimalToBinaryRecursion = function (num) {

    //If the number is 0, returns a blank string and terminates
    if (num === 0) {
        return "";
    }

    //Else, returns the same function with an updated input (need to convert the remainder value to a string)
    else {
        return decimalToBinaryRecursion(Math.trunc(num / 2)) + ((num % 2).toString());
    }
};

//for loop to test the outputs of each converter function from numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log("Binary of " + i + " is equal to: (Loop method): " + decimalToBin(i) + ", (Recursion method): " + decimalToBinaryRecursion(i));
}

//****Task 2****

//Declare a function to parse a string
let parseObject = function (jsonString) {

    //Declare a blank object
    let parsedObject = {};

    //If the string doesn't contain curly braces {} on both ends, it is not properly formatted like an object, so return null
    if (jsonString.charAt(0) !== "{" && jsonString.charAt(jsonString.length - 1) !== "}") {
        console.log("Object is not well formatted");
        return null;
    }

    //Removes the curly braces using the slice method
    let allProperties = jsonString.slice(1, jsonString.length - 1);
    console.log(allProperties);

    //Separates the string into substrings at each comma using the split method
    let splitProperties = allProperties.split(", ");
    console.log(splitProperties);

    //Loop through all the separate substrings
    for (let property of splitProperties) {

        //Finds the index of the colon in the substring using the indexOf method
        let splitIndex = property.indexOf(":");

        //Sets the property name equal to part of the substring up to the index before the colon
        let propertyName = property.slice(0, splitIndex);

        //Sets the property value equal to part of the substring from the index past the colon to the end
        let propertyValue = property.slice(splitIndex + 1, property.length);

        //Prints out the property names and corresponding property values
        console.log("The property name is: " + propertyName + ", and the property value is: " + propertyValue);

        //Sets the property value for a corresponding property name
        parsedObject[propertyName] = propertyValue;

    }
    return parsedObject;
};

//Declares a binding equal to the value of the parseObject function with a sample argument
let string1 = parseObject("{x:5, y:6, z:7}");

//Prints out the property value of x
console.log("The property value x of string is: " + string1["x"]);

//****Task 3****

//Declare a function that takes a numeric threshold value and an array of arrays
let findList = function (threshold, ...lists) {

    //Loop to go through each inner array in the outer array
    for(let list of lists) {

        //For loop to go through each element in the inner array
        for (let i = 0; i <= list.length; i++) {

            //if the element is greater than the threshold, break the loop
            if (list[i] > threshold) {
                break;
            }

            //else if the loop manages to get to the last element without reaching the break, return the list
            else if (i === list.length) {
                return list;
            }
        }
    }
};

//Declare three arrays to test the function
let list1 = [2, 47,67, 79];
let list2 = [5, 6, 8, 9];
let list3 = [34, 50, 65];

//Declare a binding with the findList function
let foundList = findList(10, list1, list2, list3);

//Prints out the binding as an array
console.log(foundList);

//Prints out the binding as an array but without the brackets or commas
console.log(...foundList);