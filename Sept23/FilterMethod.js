//===filter(): it is a higher order function
let arr = [10, 20, 40, 50,"hi "];
function fil(arr, cb) {
    let fil1 = [];
    for (let i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            fil1.push(arr[i])
        }
    }
    return fil1;
}
let ex=fil([10, 20, 24, 40, 50], (x) => { return x > 20 });
console.log(ex);
let reduce1 = ex.reduce((acc1, l1) => acc1 + l1);
console.log(reduce1);






///second example
let itemPrice = [150, 110, 240, 650, 2540];
console.log(
  itemPrice.map(xyz => {
    return xyz * 0.20+xyz;
  }).filter(xyz1=>{return xyz1>200})
);
function x(arr, arr2, cb, cb1) {
  let up = [];
  for (let i = 0; i < arr.length; i++) {
    up.push(cb(arr[i]));
  }
  console.log(up);
  let up2 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (cb1(arr2[i])) {
      up2.push(arr2[i]);
    }
  }
  return up, up2;
}
 let filteredArr= x([150, 110, 240, 650, 2540], [300, 400, 500], p => {
    return p + p * 0.2;
    // console.log(q > 300);
  }, q => {
    return q > 300;
 });
  console.log(filteredArr);
// console.log(x([150, 110, 240, 650, 2540],(xyz)=>{return xyz*.2+xyz}),(xy)=>{return xy>200});

let red = filteredArr.reduce((acc, l) => {
  return acc + l;
});
console.log(red);