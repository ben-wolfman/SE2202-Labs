//****Task 1****

//Declare function
let printHello = function (name) {
    let message = "Hello";
    //Concatenate message and name
    console.log(message + " " + name);
};

//First function call (step 4)
printHello("Benjamin");

//New function printGreeting is the same as printHello
let printGreeting = printHello;
//Call printGreeting
printGreeting("Benjamin");

//****Task 2****

//Declare function to print each letter on separate line
let printVertical = function (word) {
    for (let i = 0; i < word.length; i++) {
        console.log(word.charAt(i));
    }
};

//Test printVertical function
printVertical("vertical");

//Declare function to print the word with spaces
let printWithSpaces = function (word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result = result + word.charAt(i) + " ";
    }
    console.log(result);
};

//Test printWithSpace function
printWithSpaces("spaces");

//Declare function to print word in reverse
let printReverse = function (word) {
    let result = "";
    for (let i = word.length; i >= 0; i--) {
        result = result + word.charAt(i);
    }
    console.log(result);
};

//Test printReverse function
printReverse("reverse");

//Declare function to print word with specified printing type
let genericPrinter = function (word, printingFunction) {
    printingFunction(word);
};

//Call generic function three times with different printing types
genericPrinter("genericVertical", printVertical);
genericPrinter("genericSpace", printWithSpaces);
genericPrinter("genericReverse", printReverse);

//****Task 3****

//Declare calendarName function
let calendarName = function (monthOrDay) {
    let monthName = function (monthNum) {
        let month = "";
        switch (monthNum) {
            case 1: month = "January";
                break;
            case 2: month = "February";
                break;
            case 3: month = "March";
                break;
            case 4: month = "April";
                break;
            case 5: month = "May";
                break;
            case 6: month = "June";
                break;
            case 7: month = "July";
                break;
            case 8: month = "August";
                break;
            case 9: month = "September";
                break;
            case 10: month = "October";
                break;
            case 11: month = "November";
                break;
            case 12: month = "December";
                break;
            default:
                month = "unknown";
                break;
        }
        return month + "_m";
    };
    let dayName = function (dayNum) {
        let day = "";
        switch (dayNum) {
            case 1: day = "Sunday";
                break;
            case 2: day = "Monday";
                break;
            case 3: day = "Tuesday";
                break;
            case 4: day = "Wednesday";
                break;
            case 5: day = "Thursday";
                break;
            case 6: day = "Friday";
                break;
            case 7: day = "Saturday";
                break;
            default:
                day = "unknown";
                break;
        }
        return day + "_d";
    };

    if (monthOrDay === 'm') {
        return monthName;
    }
    else {
        return dayName;
    }
};

//Name of the month
let findNameOfTheMonth = calendarName('m');
console.log(findNameOfTheMonth(4));

//Name of the day
let findNameOfTheDay = calendarName('d');
console.log(findNameOfTheDay(4));

//****Task 4****

//Declare function to calculate power of a number
let powerOf = function (powerFactor) {
    //Declare inner function that computes power
    let raiseToPower = function (base) {
        let result = 1;
        for (let i = 0; i < powerFactor; i++) {
            result = result * base;
        }
        return result;
    };
    return raiseToPower;
};

//Call function with 5 to the power of 2
let powerOfTwo = powerOf(2);
console.log(powerOfTwo(5));

//Call function with 5 to the power of 3
let powerOfThree = powerOf(3);
console.log(powerOfThree(5));

//Call function with 5 to the power of 42
let powerOfFour = powerOf(4);
console.log(powerOfFour(5));