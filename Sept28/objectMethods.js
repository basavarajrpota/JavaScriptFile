let obj = {
    eName :'Ratan',
  ID:123
}
console.log(obj);
console.log(Object.seal(obj));
console.log(Object.isSealed(obj)); //o/p will be in boolean
obj.ID = 444;
console.log(obj);  // we can update the values
obj.Company = "Tata";

console.log(obj); // we cannot add the key,value pair

let obj1 = {
    sName: "Sachin",
    ID:234,
}
console.log(obj1);
console.log(Object.freeze(obj1));
console.log(Object.isFrozen(obj1));

obj1.sName = "Tendulkar";
console.log(obj1); // we cannot add the value pair

obj1.Sports = "Cricket";
console.log(obj1);   //we cannot add the key,value pair


// let x = new Date();
// console.log(x.getDay());
// switch ( new Date() ...) {
//   case 0: {
//     console.log(Sunday);
//     break;
//   }
//   case 1: {
//     console.log(Monday);
//     break;
//   }
//   case 2: {
//     console.log(Tuesday);
//     break;
//   }
//   case 3: {
//     console.log(Wednesday);
//     break;
//   }
//   case 4: {
//     console.log(Thursday);
//     break;
//   }
//   case 5: {
//     console.log(Friday);
//     break;
//   }
//   case 6: {
//     console.log(Saturday);
//   }
// }

