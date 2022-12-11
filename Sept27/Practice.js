
// to get timestamp
// console.log(+new Date());
// console.log(Date.now());
// console.log(new Date().getTime());
let user = [
  { name: "John", ID: 123, Company: "TYSS" },
  { name: "Johny", ID: 456, Company: "TCS" },
  { name: "Johnson", ID: 789, Company: "TECH" },
];
console.table(user);

let element = document.getElementsByTagName("body")[0];
console.log(element);


let fruits = ["Banana", "Orange", "Apple"];
delete fruits[0];
console.log(fruits);
fruits[fruits.length] = "Kiwi";
console.log(fruits);


const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
  return 0.5 - Math.random();
});
console.log(points);