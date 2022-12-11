//=======Array.from()=====
//Array.from() and pass in prices as the first argument,and an arrow fn as the second argument
let prices = [500, 400, 300];
let taxed = Array.from(prices, price => price + 30);
console.log(taxed);


console.log(Array.from("hii"));
console.log(Array.from([1, 2, 3], x => x * 3));


//======Array.0f()=====
//it creates a new Array instance from a variable number of argument, regardless of number or type of the argument.

//syntax-Array.of(element0[,element1[,...[,elementN]]])
//element - Elements used to create the array.

//ex:
console.log(Array.of(true));
console.log(Array.of(1, 3, 5));

console.log(Array(8));// array of 7 empty slots
console.log(Array(1, 2, 3));// array of[1,2,3]



//===find()===
//it returns the value of the first element in the provided array that satisfy the provided testing function 
//syntax==> arr.find(callback(element [,index[,array]])[,thisArg]
let arr1 = [5,9,11, 12, 8, 130, 44];
let found = arr1.find(val => val > 10);
console.log(found);  //o/p==>11