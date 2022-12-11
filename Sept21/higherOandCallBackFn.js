
function hof(a, b, opt) {
    return opt(a, b);
}
let add = hof(20, 10, (a, b) =>  a+b )
console.log(add);


let sub = hof(18, 7, function (a, b) { let s = a - b; return s;})
console.log(sub);

let mult = hof(3, 7, (a, b) => a * b );
console.log(mult);


let div = hof(224,8, (a, b) => a /b);
console.log(div);
