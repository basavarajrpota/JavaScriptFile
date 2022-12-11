"use strict"
var a = 1;
function x() {
    var a = 2;
    console.log(a);
    console.log(window.a);
}
x();



// to prove "this" keyword and "window" object both are same
console.log(this);
console.log(window);
console.log(this==window);