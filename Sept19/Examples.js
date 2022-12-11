
//example for arrow functions
//==ex:1
// function x() {
//     console.log("hello");
//     var a = "hi";
//     console.log(a);
// }
// x();

//==ex:2
// let x = () => {
//     return ("I am end");
// }
// console.log(x());

//==ex:3
// var rest = () => {
//     console.log("hello")
//     return ("Start")
// }
// console.log(rest());

//normal function
//  function rest() {
//    console.log("hello");
//    return "I am end";
//    console.log("hi");
// }
//  console.log(rest());

//ex=4
// ask = () => {
//   console.log("No need");
//   return "i am end";
// }
// console.log(ask());

// let obj = {
//     return:"hi"
// }
// console.log(obj);

//ex:5
// let m = () => {
//     return "hello";
// }
// console.log(m());

//ex:6
// var t = () => {
//     document.write("Ok");
//     console.log("baby");
//     return ("cool");
// }
// {
//     confirm("It's Monday")
// }
// console.log(t());

// let add = (a, b) => {
//     console.log("hi")
//     a + b;
// }
// console.log(add(3, 4));

// let sub = (x, y) => x - y;
// console.log(sub(4,3));

let cir = (r) => 2 * r;
console.log(cir(5));

let cirArea = r => 3.142*r*r;
console.log(cirArea(5));

let areaOfRectangle = (o, p) => 
    o * p;
console.log(areaOfRectangle(5, 4));
    
let l = (Number(prompt("enter length value")));
let w = (Number(prompt("enter width value")));
let area = (l, w) => l * w;
console.log(area(l, w));