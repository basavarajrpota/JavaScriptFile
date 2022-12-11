// let a = prompt("enter the number");

// ===if=====//
// if (a % 2 == 0) {
//     console.log("Entered value is even");
// }

// ====if else ===//
// if (a % 2 == 0) {
//     console.log("Entered value is even");
// }
// else {
//     console.log("Entered value is odd");
// }

// let a = 100;
// let b = 300 ;
// let c = 50;

// ==if else ladder==
// if (a > c && a > b) {
//     console.log("a is biggest number");
// }
// else if (b > c) {
//       console.log("b is biggest number");
// }
// else {
//       console.log("c is biggest number");
// }

//====switch===/  if u remove the bre ak it will print all the statement after that line
// and it is called "optimise way"
let Char="b"
switch (Char) {
  case "a": {
    console.log("a is an vowel");
    // break;
  }
  case "e": {
    console.log("e is an vowel");
    // break;
  }
  case "i": {
    console.log("i is an vowel");
    // break;
  }
  case "o": {
    console.log("o is an vowel");
    // break;
  }
  case "u": {
    console.log("u is an vowel");
    break;
  }
  default: {
    console.log("it's an consonant");
  }
}