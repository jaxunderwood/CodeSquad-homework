// Q1:
// Write a function expression called isEven that checks if a given number is even and returns true if it is, otherwise false.

let isEven = function(a) {
    if (a % 2 == 0){
        console.log("true");
    }else{
        console.log("false")
    }
}
isEven(2)

// Q2:
// Write a function declaration named capitalize that takes a string as input and returns the same string with the first letter capitalized.

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize("grapes of wraps"));
// Q3:
// Define an arrow function named calculateSquare that takes a number as input and returns its square.

const calculateSquare = (num) => num ** 2;
console.log(calculateSquare(3));

// Q4:
// Write a function declaration named isPositive that checks if a number is positive (greater than zero) and returns true or false.

function isPositive(number){
    if (number > 0){
        return true
    }else{
        return false
    }
};
console.log(isPositive(100));
// Q5:
// Define an arrow function named calculateCircleArea that calculates the area of a circle given its radius as a parameter.
// pie * radius squared
const calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);

console.log(calculateCircleArea(3));

// Q6:
// Write a function expression called isLeapYear that determines if a year is a leap year and returns true or false.
const isLeapYear = function(year){
    if(year % 4 == 0){
        return true
    }else{
        return false
    }
};


// Q7:
// Define an arrow function named calculateAge that takes a birth year as a parameter and returns the age.

const calculateAge = (year) => {
    const y = new Date()
    let current =  y.getFullYear();
    return current - year;
}

console.log(calculateAge(1992));


// Q8:
// Write a function declaration named calculateHypotenuse that calculates the length of the hypotenuse of a right triangle given the lengths of its two sides.
const calculateHypotenuse = function(side1, side2){
        return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
}
console.log(calculateHypotenuse(2, 2));

// Q9:
// Write a function named findGreaterNumber that takes two numbers as parameters and returns the greater of the two.
function findGreaterNumber(num1, num2){
    if (num1 > num2){
        return num1
    }else{
        return num2
    }
};
console.log(findGreaterNumber(5, 2));

// Q10:
// Define a function named calculateBMI that calculates the BMI (Body Mass Index) based on a person's weight (in kilograms) and height (in meters).
function calculateBMI(weight, height){
     return   weight / Math.pow(height, 2)
}

console.log(calculateBMI(60, 1.55));


// Q11:
// Write a function called calculateSimpleInterest that calculates the simple interest based on the principal amount, interest rate, and time period.
function calculateSimpleInterest(principal, rate, time){
        return (principal * rate * time) / 100;

}
console.log(calculateSimpleInterest(5, 10, 5));
// Q12:
// Write a function named convertMinutesToHours that takes a number of minutes as input and returns the equivalent time in hours and minutes (e.g., "2 hours and 30 minutes").
function convertMinutesToHours(minutes){
    return  minutes / 60;

}
console.log(convertMinutesToHours(135));
