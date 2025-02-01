//this is like the printf of C
console.log("Hello from main.js");

//variable
let age = 26;
console.log(age);

//constant variable can be assigned only once
const salary = 80000;
console.log("Salary: ",salary);

// declare variable which is not constant with let
let sum = 0;
sum = 5;
console.log(sum);

//string
const name = 'shubham';
const language = 'javascript';
const channel = `CodeWithShubham`;

//number
const total = 0;
const PI = 3.14;

//boolean
const isPrimaryNumber = true;
const isNewUser = false;

//without initialization default value is undefined
let result;
console.log(result);
//you can also assign undefined to a variable as well as null
const res = undefined;
const data = null;
console.log(res,data);

//object
const person = {
    firstName:'Bruce',
    lastName: 'Wayne',
    age: 35,
};

console.log(person);
console.log(person.firstName);
console.log(person['lastName']);

//array
const oddNumbers = [1,3,5,7,9];
console.log(oddNumbers);
console.log(oddNumbers[0]);
console.log(oddNumbers[3]);