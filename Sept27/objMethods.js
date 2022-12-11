let emp = {
    eName:"Virat",
    ID: 1234,
    Company: "TYSS",
    address:function(){console.log(this);}
}
//object is a method
console.log(Object.keys(emp)); //to fetch the keys only
console.log(Object.values(emp));  // to fetch the values only
console.log(Object.entries(emp));  //to fetch the both keys and values
console.log(emp);
// let arr = Object.fromEntries(emp);
// console.log(arr);
// emp.map(val => {
//     return val + 1;
// });
// console.log(arr);

