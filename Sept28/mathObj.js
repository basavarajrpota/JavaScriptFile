console.log(Math.sqrt(25));
console.log(Math.cbrt(8));
console.log(Math.floor(100.1));
console.log(Math.floor(100.9));// it will move floor only means base value 100
console.log(Math.ceil(20.1));
console.log(Math.ceil(20.7));   // it will move ceil only means base value 21
    console.log(Math.round(28.9));


 //task:1   take 2 no. from the frompt  1st no. has a base value 2nd has exponent value
// a) power of
// b) sqrt
//c) cbrt

let x = prompt("enter the number");
let y = prompt("enter exponent value");
console.log(`the square root of ${x} is ${Math.sqrt(x)}`);
console.log(`the cube root of ${y} is ${Math.cbrt(y)} `);
// console.log(Math.cbrt(y));
// console.log(Math.cbrt(y));
// console.log(Math.pow(x,y));
// console.log(Math.sqrt(x));
