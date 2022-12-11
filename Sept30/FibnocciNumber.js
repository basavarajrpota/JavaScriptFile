let x1 = 0;
let x2 = 1;
let x3;
function fib() {
    while (x1 < 100) {
        console.log(x1);
        x3 = x1 + x2;
        x1 = x2;
        x2 = x3;
    }
    return x3
}
fib();