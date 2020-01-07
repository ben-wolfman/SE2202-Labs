//****Task 1****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Declare function to check if number is between 5 and 20
let limitFunction = function (num) {
    return ((num >= 5) && (num <= 20));
};

//Declare an array with specified values
let X = [134, 6, 7, 83, 9, 1, 0, 9, 6, 17, 54, 16];

//Uses the .filter() method to include values between 5 and 20
let limitValues = X.filter(limitFunction);

//prints out the new filtered array
console.log(limitValues);

//Uses the .filter() method, but with arrow notation
let filteredValues = X.filter(num => ((num>=5) && (num <= 20)));
console.log("Filtered array using arrow notation:");
//Prints out the new filtered array
console.log(filteredValues);

//Declare a function to transform each distance to its value in inches
let transformToInches = function(num) {
    return num*39.37;
};

//Uses the .map() method to execute on each value in the array
let transformedToInches = limitValues.map(transformToInches);

//Prints out the new array
console.log(transformedToInches);

//Uses the .map() method, but with array notation
let transformedToInches2 = limitValues.map(num => (num*39.37));
console.log("using arrow notation");
//Prints out the new array
console.log(transformedToInches2);

//Declares a function to find the lower value between two values
let findMinValue = function(a, b) {
    return (a < b)?a:b; //if a is less than b return a, otherwise return b
};

//finds the minimum value in the array by using the findMinValue function and the .reduce() method
let min = transformedToInches.reduce(findMinValue);
//Prints out the value
console.log(min);

//Combines all previous steps into one line, to find the minimum distance in inches between 5 and 20
let min2 = X.filter(num => ((num >= 5) && (num <= 20))).map(num => (num*39.37)).reduce((a,b)=> ((a<b)?a:b));
//Prints out the value
console.log(min2);

//****Task 2****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Declare an array that contains multiple objects that represent points in the x-y plane
let points = [ {x:5, y:6}, {x:3, y:7} , {x:8, y:0}, {x:9, y:10} , {x:15, y:4} , {x:0, y:15} ];

//Declare a function to check if points don't have a 0, and therefore don't lie on an axis
let findPointOffAxes = function(point) {
    return ((point.x !== 0) && (point.y !== 0));
};

//Store the points not on x or y axis in an array using the .filter() method
let pointOffAxes = points.filter(findPointOffAxes);
console.log("Filtered points:");
//Prints the filtered points
console.log(pointOffAxes);

//Declare a function to calculate the distance between two points using the distance formula
let findDistances = function (point) {
    return (Math.sqrt(Math.pow(point.x,2) + Math.pow(point.y, 2)));
};

//Uses the .map() method and stores distances from the origin of each filtered point in an array
let distances = pointOffAxes.map(findDistances);
console.log("Distances from the origin:");
//Prints out distances
console.log(distances);

//Declare a function to compare distances and return the greater one
let findMaxDistance = function(distance1, distance2) {
    return (distance1 > distance2)?distance1:distance2; //if distance1 is greater than distance2 return distance1, otherwise return distance2
};

//Finds the maximum distance in the array using the .reduce() method and the findMaxDistance function
let maxDistance = distances.reduce(findMaxDistance);
//Prints the maximum distance from the origin
console.log("The maximum distance is: " + maxDistance);

//Combines all above steps into one line to find the maximum distance from the origin using the filter, map, and reduce methods
let MaxDistance2 = points.filter(point => (point.x !== 0) && (point.y !== 0))
    .map(point => Math.sqrt(Math.pow(point.x,2) + Math.pow(point.y, 2)))
    .reduce((distance1, distance2) => (distance1 > distance2)?distance1:distance2);

//Prints the maximum distance from the origin derived from the combined method that uses arrow notation
console.log("The maximum distance returned from arrow notation is: " + MaxDistance2);