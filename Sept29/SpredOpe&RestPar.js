function test(b,a,...c) {
    console.log(c);
    console.log(b);
    console.log(a);
}
test(10, 20, 30, 40);  


// function demo(...m, ...x) {
//     console.log(c);
//     console.log(x);
// }
// demo(1,2,3,4,5)   //SyntaxError: Rest parameter must be last formal parameter

let arm=["hello","hi","demo"]
let [...z] = arm;
console.log(z);//(3)['hello','hi','demo' ]

let { x, y, ...l } = arm;
console.log(x);//undefined
console.log(y);//undefined
console.log(l);//{0:'hello',1:'hi',1:'demo'}


//by using map() and reduce()
let num = '1238';
let [...i] = num;
console.log(parseInt(num));
console.log(i.map(q => parseInt(q)).reduce((acc, v) => { return acc + v }));

//by using split()
let s = num.split("");
console.log(s.map(q => parseInt(q)).reduce((acc, al) => acc * al));