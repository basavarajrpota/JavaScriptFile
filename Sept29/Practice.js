
//Object.assign()
// let n = '12345abc';
// let m = n.slice(0,5);
// let z = m.split("");
// console.log(z.map(a => parseInt(a)).reduce((acc, l) => acc + l));

// let a = { x: 100, x1: 200 };
// let b = { x1: "hi", x3: 700 };
// let c={x1:2}
// let retTarget = Object.assign(a, b,c);
// console.log(a);


//Object.create()
// let person = {
//     isHuman: false,
//     personIntroduction: function () {
//           console.log(`My name is ${this.name} Am i human? ${this.isHuman}`)
//     }
// }
// let x=Object.create(person);
// x.name = "Haresh";
// x.isHuman = true;
// x.personIntroduction();
// console.log(person);


//Object.defineProperty()
// let obj = {}
// Object.defineProperty(obj, "name", {
//     value: "Deepak"
// })
// console.log(obj);


//Object.defineProperties()
// let obj1 = {};
// Object.defineProperties(obj1,{ name:{
//     value:"Rohit",
// },ID:{
// value:"TYSS234",
// }
// })
// console.log(obj1);

// Object.fromEntries
// let entry = new Map([["company", "TYSS"], ["name", "Rohit"]]);
// let obj = Object.fromEntries(entry);
// console.log(obj);

//Object.is()
// console.log(Object.is(24, 24));  // true
// console.log(Object.is(this, window));   // true
// console.log(Object.is(this, this));    // true
// console.log(Object.is(24, "hello"));   //false 


//