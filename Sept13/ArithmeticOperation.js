//  additional operation:
let x = 10;
// console.log(++10);
let y = 5;
console.log(x + y);
let a = "hi";
let b = "hello";
console.log(x + a);
console.log(x + "10"); //here '10' is a string concatination will take place, o/p=1010
// subtraction operation:
console.log(x - y);
console.log(x - a);//here 'a' is a string it shows NaN(Not a  Number)
console.log(a - x);//here 'a' is a string it shows NaN(Not a  Number)
console.log(x - "2");   //type casting or type co-version will happen,o/p=8

// multiplication operation:
console.log(x * y);
console.log(x * a);//here 'a' is a string it shows NaN(Not a  Number)
console.log(x * "3");//type casting will happen,o/p=30
console.log("10" * y);//type casting will happen,o/p=50

// division operation:

console.log(x / y);
console.log(x / "2");//type casting will happen,o/p=8
console.log(10 / a);  //here 'a' is a string it shows NaN(Not a  Number)
console.log(10 / "hello"); //o/p=NaN

// modulus operation:

console.log(x % y);
console.log("10" % y);//type casting will happen,o/p=0
console.log(11 % 5);  //o/p=1

//exponential operation:
console.log(2 ** 2);
console.log(2 ** "3");//type casting will happen,o/p=8
console.log(2 ** "hello");  //o/p=NaN

//increment  operation:
// console.log(++y);
console.log(x++);    //in JS post increment not works
// console.log(++"10");  //Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
console.log(x);
console.log(++x);  //o/p=12
console.log(x++);  //o/p=12
console.log(x++);  //o/p=13

//decrement operation:

console.log(--y);
console.log(--y);
console.log(--y);