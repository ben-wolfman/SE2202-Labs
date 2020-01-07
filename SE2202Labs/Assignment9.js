//****Task 1****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Declare an IIFE
(function () {

    //Declare an array of grades
    let grades = [95, 86, 92, 72, 54];

    //Declare an inner function "average" that returns the average of grades in an array
    let average = function () {
        //Use the reduce method to find sum of all values
        let total = grades.reduce((a,b)=>a+b, 0);
        //Divide the sum by length to get average
        return total/grades.length;
    };

    //Declare an inner function "maxGrade" that returns the maximum grade in an array
    let maxGrade = function () {
        //Use the reduce method to find the max value
        let maxGrade = grades.reduce((a,b)=>(a>b)?a:b);
        //Return the max value
        return maxGrade;
    };

    //Prints result of Task #1 by calling average and maxGrade functions
    console.log(" \n Task #1:");
    console.log("The average is " + average());
    console.log("The max grade is " + maxGrade());
})();

//****Task 2****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let gradesObj = (function () {

    //Declare an array of student grades
    let grades = [95, 86, 92, 72, 54];

    //Declare an inner function "average" that returns the average of grades in an array
    let average = function () {
        let total = grades.reduce((a,b)=>a+b, 0);
        return total/grades.length;
    };

    //Declare an inner function "maxGrade" that returns the maximum grade in an array
    let maxGrade = function () {
        let maxGrade = grades.reduce((a,b)=>(a>b)?a:b);
        return maxGrade;
    };

    //Return statement with objects and corresponding properties so inner functions can be called later
    return{
        average:average,
        maxGrade:maxGrade

    }
})();

//Output the results of Task #2
console.log("\n Task #2:");
console.log("The average is " + gradesObj.average());
console.log("The max grade is " + gradesObj.maxGrade());

//****Task 3****
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let gradesObjWithMutators = (function () {
    let grades = [95, 86, 92, 72, 54];

    let average = function () {
        let total = grades.reduce((a,b)=>a+b, 0);
        return total/grades.length;
    };

    let maxGrade = function () {
        let maxGrade = grades.reduce((a,b)=>(a>b)?a:b);
        return maxGrade;
    };

    //Use a setter to change the value of grades
    let setGrades = function (newGrades) {
        grades = newGrades;
    };

    //Use a getter to return value of grades
    let getGrades = function () {
        return grades;
    };
    return{
        average:average,
        maxGrade:maxGrade,
        setGrades:setGrades,
        getGrades:getGrades

    }
})();

//Output the result of Task #3
console.log("\n Task #3:");
console.log("The average is: " + gradesObjWithMutators.average());
console.log("The max grade is: " + gradesObjWithMutators.maxGrade());

//Print the current grade array with the getter method
console.log(gradesObjWithMutators.getGrades());
//Use the setter to update the list of grades
gradesObjWithMutators.setGrades([80, 93, 79]);
//Print the updated grade array with getter method
console.log(gradesObjWithMutators.getGrades());



