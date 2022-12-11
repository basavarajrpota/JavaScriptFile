// function fun() {
//     const test = window.open();
//     test.document.open();
//     test.document.innerHTML('<h1>hello </h1>')
// }

// function Test() {
//     return arguments;
// }
// let val = Test("Naveen", "Vinay");
// console.log(Array.isArray(val));
// let finalVal = Array.from(val);// Array.from() converts object to array.
// console.log(Array.isArray(finalVal));



// let x = () => {
//     return arguments;
// }
// let y = x('Sachin', 'Ratan');
// console.log(y);  // Uncaught ReferenceError: arguments is not defined

// Note: diff b/w Normal and  Arrow fn=> arguement object

// let NormalFunction = function (...rest) {
//     return rest;
// };
// let demo1 = NormalFunction("Suresh", "Ramesh");
// console.log(demo1);
// console.log(Array.isArray(demo1));

let ArrowFunction = (...rest)=> {
  return rest;
};
let demo2 = ArrowFunction("Suresh", "Ramesh");
console.log(demo2);
console.log(Array.isArray(demo2));


// let x = (username, password, ...skills)=>{
//     return {username,password,skills}
// }
// let a = x("Ravi", "nani@123", "html", "css", "js", "react");
// console.log(a);


// let str = "Rakesh is good";
// let strToArray = str.split("");//(6) ['R', 'a', 'k', 'e', 's', 'h']
// console.log(strToArray);

// let strToArray12 = str.split(" ");["Rakesh"];//&  (3) ['Rakesh', 'is', 'good']
// console.log(strToArray12);



// let strToArray1 = [...str];
// console.log(strToArray1);  ///(6) ['R', 'a', 'k', 'e', 's', 'h']

// //another case we can convert array like object to array by using spread operator
// function test() {
//     return arguments;
// }
// let n = test("ravi", "raja", "rahul")
// console.log(n); // Arguments(3) ['ravi', 'raja', 'rahul', callee: ƒ, Symbol(Symbol.iterator): ƒ]  array like object....
// let o = [...n];
// console.log(o); //(3) ['ravi', 'raja', 'rahul']  ==array object..


// let frontend = ["html", "css", "js", "react"];
// let backend = ['node js', "expressjs", 'nextJs', 'mongodb']
// let fullstack = frontend.concat(backend);
// console.log(fullstack);

// let mno = [...frontend, ...backend];
// console.log(backend);
