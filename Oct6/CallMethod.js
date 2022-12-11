let rakeshObj = {
    name: "Rakesh",
    amount: 10000,
};

let manjuObj = {
    name: "Manju",
    amount: 20000
};
let rahulObj = {
  name: "Rahul",
  amount: 20000
};
let windowObj = window;
function callAnyObj() {
    console.log(`I need Money from ${this.name} of ruppes ${this.amount}`);
}
callAnyObj.call(rahulObj);//I need Money from Rahul of ruppes 20000
callAnyObj.call(manjuObj);//I need Money from Manju of ruppes 20000
callAnyObj.call(rakeshObj);//I need Money from Rakesh of ruppes 10000


let obj1 = {
    num: 200,
};
let obj2 = {
    num: 100,
};
function totalValue(num1,num2) {
    return this.num + num1 + num2; //here "this" refers to current object
}


///======important for interview======
let total = totalValue.call(obj2, 1108, 92);  //using call method here
console.log(total);//o/p==>1300

let total1 = totalValue.apply(obj1,[ 108, 92]);  //by using apply method we have to wrap values inside an Array  [];
console.log(total1);//o/p==>400 


let totalBind = totalValue.bind(obj2, 1108, 92);//whenever we use bind method we have to invoke ();
console.log(totalBind());  //o/p==>1300