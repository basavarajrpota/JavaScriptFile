let x = new Date();
console.log(x);
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getTimezoneOffset());
console.log(x.getDay());
console.log(x.getMonth());
console.log(x.getFullYear());
console.log(x.getUTCDay());
console.log(x.getUTCMinutes());
// console.log(x.geT());





let a = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// week[3] = "";
console.log(week[3]);
console.log(a.getDay());
console.log(week[a.getDay()]);

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
console.log(months[a.getMonth()]);


const m = "Raju";
const ab = new Date();
let w = months[ab.getMonth()];
let c = ab.getFullYear();
let q = ab.getHours();
let e = ab.getMinutes();
let xyz = `My name is ${m},attending JS class on ${q}:${e} Am in the ${w} month of ${c} year`;
console.log(xyz);