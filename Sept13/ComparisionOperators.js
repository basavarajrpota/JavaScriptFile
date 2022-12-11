let x = 10;
let y = 10;
let z = "10";
console.log(x == y);
console.log(x === y);
console.log(x != z);
console.log(x !== z);
console.log(x != y);
console.log(x !== y);
console.log(x === z);
console.log(x == z);

//ternary operator  (?)
10 > 1 ? alert("Yes"): alert("No");

let age = prompt("enter your age");
age>18 ? console.log("Eligible to Vote"):console.log("Not eligible to Vote Wait until your Age turn to 18");