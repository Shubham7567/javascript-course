// functions

function greet(name){ //name is parameter
    console.log('Good morning ',name);
}

greet('Shubham'); //Shubham is argument
greet('Akash');
greet('Praveen');

function add(a,b){
    return a+b;
}

const sum = add(10,20);
console.log(sum);

const arrowSum = (a,b) => a+b;
console.log(arrowSum(15,25));