// var a = 100;
// (function () {
//     // var a = 10;
//     console.log(a);
// })();

var fun =(function () {
    let str = "I am function";
    return str;
})
console.log(fun()); 
(function () {
    console.log("IIFE");
})();