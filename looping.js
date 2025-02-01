//Looping code
for(let i=1; i<=5; i++){
    console.log('Iteration number:',i);
}

let index = 1;
while(index <= 5){
    console.log('Iteration number:',index);
    index++;
}

index = 1;
do{
    console.log('Iteration number:',index);
    index++;
} while(index <= 5);

const array = [1,2,3,4,5];
for(const element of array){
    console.log('Iteration number:',element);
};

array.forEach(function(element){
    console.log('Iteration number:',element);
});