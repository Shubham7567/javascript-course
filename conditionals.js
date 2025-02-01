//conditional statement
const num = 0;
//console.log(num > 0 ? 'Positive' : 'Negative');
if(num > 0){
    console.log('Positive');
} else if(num === 0){
    console.log('Zero');
}else{
    console.log('Negative');
}

const color = 'red';
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
}