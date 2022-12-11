//Higher order functions/methods of Array

//==map():
let m = [10, 20, 30, 40];
console.log(
  m.map(val => {
    return val + 15;
  })
);
//o/p=[25,35,45,55]

//map an array without using map method
let updatedArr = [];

function arrFn(arr, item) {
  for (let i = 0; i <= arr.length - 1; i++) {
    updatedArr.push(item(arr[i]));
  }
  return updatedArr;
}
console.log(
  arrFn([10, 20, 30], x => {
    return x + 2;
  })
);

function l(o, p, cb) {
  let upl = [];
  let upl1 = [];
  for (let i = 0; i < o.length; i++) {
    upl.push(cb(o[i]));
    upl.push(cb(p[i]));
  }
  return upl;
  for (let j = 0; j < length; j++) {
    upl1.push(cb(p[j]));
  }
  return upl1;
}
console.log(
  l([1000, 2000, 100], [10, 20, 30], z => {
    return z + 50;
  })
);

let aa = [1000, 2000, 3000];
let xyz = aa.map(bb => {
  return bb + 56;
});
console.log(xyz);

let str = "hello";
let v = [];
console.log(
  str
    .split("")
    .map(v => {
      return "#" + v;
    })
    .join("")
);

let mno = str.split("");
console.log(mno);

function str1(str, cb1) {
  let up1 = [];
  for (i = 0; i < str.length; i++) {
    up1.push(cb1(str[i]));
  }
  return up1;
}
console.log(
  str1(mno, abc => {
    return "#" + abc;
  })
);




