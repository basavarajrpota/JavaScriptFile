console.log("Scope");
var m = "Welcome";  //Global variable    === it can access any where we want
let n = "Pay";    // Script v            === it can access any where we want
const o = "TYSS";  //Script v               === it can access any where we want

{
  var a = "To"; //Block v    === it can access any where we want
  const b = 100; //Block v   === these can access only in the same  block
  let c = "rupees"; //Block v       === these can access only in the same  block
  console.log(m);
  console.log(a);
  console.log(o);
  console.log(n);
  console.log(b);
  console.log(c);
}
function test() {
  var x = "Amrutha Mahostava"; //local v
  let y = 10000; //local v
    const z = "Celebration"; //local v === these can access only in the same function block
console.log(x);
  console.log(y);
    
}
test();
console.log(a);