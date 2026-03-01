const person = { firstName: "John", lastName: "Doe" };

// 1
// Use array destructuring to define variables and assign the values in the object
console.log("====problem 1====");
 const firstName = person.firstName;
 const lastName = person.lastName;

// OR
//  const {firstName, lastName} = person;
console.log(firstName, lastName);



// 2
// Use spread operator to add a new key-value pair to the person object: job: "Software Engineer"
console.log("====problem 2====");
const job = {...person};
person.job = "Software Engineer";

console.log(job);

// 3
// Create a copy of the person object using spread operator and assign it to a new object variable
console.log("====problem 3====");
const person2 = {...person};
person2.firstName = "Jane";

console.log(person2);




// 4
// Combine the odds and evens objects using spread operator and build a new object variable
console.log("====problem 4====");
const odds = { a: 1, c: 3, e: 5 };
const evens = { b: 2, d: 4, f: 6 };

const nums = Object.assign(odds, evens);
console.log(nums);


// 5
// Check if the car object has the model property
console.log("====problem 5====");
const car = { make: "Honda", model: "Passport", year: 2024 };

console.log(car.hasOwnProperty("model"));

// 6
// Check if the car object has the color property
console.log("====problem 6====");
console.log(car.hasOwnProperty("color"));

// 7
// Print to the console an list of the keys in the car object
console.log("====problem 7====");
console.log(Object.keys(car));
// 8
// Print to the console an list of the values in the car object
console.log("====problem 8====");
console.log(Object.values(car));
