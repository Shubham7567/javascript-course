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

const var1=10;
const var2='10';
console.log(var1 == var2);
console.log(var1 === var2);
console.log(0 == '');
console.log(0 === '');
console.log(false == '');
console.log(false === '');
console.log(null == undefined);
console.log(null === undefined);