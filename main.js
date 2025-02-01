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

let a = 10;
a = 'Shubham';
a = true;
console.log(a);

//operators

//assignament operator
let x = 10;
let y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(++x);
console.log(--y);

// for comparison
console.log(x==y);
console.log(x!=y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

//logical operator
const isValidNumber = x > 8 && 8 > y; //x > 8 || 8 > y this says or
console.log(isValidNumber);

const isValid = true;
console.log(!isValid);

//string operator
console.log('Bruce ' + 'Wayne');
const isEven = 10 % 2 === 0 ? 'Even' : 'Odd';
console.log(isEven);

///Type conversion
console.log(10 + '5'); //this will convert 10 to string and then concatenate just for +
console.log('10' - 5); //this will convert 5 to number and then subtract
console.log('Bruce' - 'Wayne'); //this will return NaN
console.log('10' - null); //this will return 10

console.log(Number('10'));
console.log(Number(false));
console.log(Number(''));
console.log(parseFloat('3.14'));
console.log(String(10));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log((500).toString());
console.log(Boolean(10)); // 0, null, undefined, NaN, '' will return false rest will return true

//Equality
// == will compare only value allow coercion
// === will compare value and type no coercion