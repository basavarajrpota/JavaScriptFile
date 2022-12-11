let fruits = ["apple", "banana", "kiwi", "grapes"];
for (let val in fruits) {
    console.log(val);
}  // it gives only index number: 0
                  //              1... 

for (let val of fruits) {
  console.log(val);
}  // it gives only values :  apple
                        //     banana..



fruits.forEach((x,y) => {
    console.log(x);
    console.log(y);
});//first value(here "x")is always value and second one(her "y") is index number

// let arr=["onion","tomato"]
fruits.map(value => { console.log(value + " " + "is a fruit"); })

let ex1 = fruits.map(items => {
    return items
})
console.log(ex1);

let ex2 = fruits.forEach(items1 => {
//   return items1;
    console.log(items1);
});
// console.log(ex2);

// for_in,for_of,for_each in object
 
//only for_in loop can be applied to the object
let studentDet = {
    sName: "Hareesh",
    id: 1234,
    job:"developer"
}
// console.log(studentDet);
for (let l in studentDet) {
    console.log(l);
}

//     for(let k of studentDet){
//         console.log(k);
// }


// let mno=studentDet.forEach((p1, p2)=> {
//     return p1
// })
//     console.log(mno);


let empDet = [{
      eName: "Sagar",
        ID: 123,
        Job:"Manager",
    },
    {
         eName: "Raju",
        ID: 321,
        Job:"Technician",
    },
      {
        eName: "Prasad",
        ID: 425,
        Job:"CTO",
    },
    {
         eName: "Vishal",
        ID: 520,
        Job:"CEO",
    }
]
for (let op of empDet) {
    console.log(op);
}
for (let po in empDet) {
  console.log(po);
}
empDet.forEach((p1, p2) => {
    console.log(p1)
    console.log(p2);
    // return p1;
});
console.log(empDet);
empDet.map((p1, p2) => {
    return p1;
})
console.log(empDet);

// empDet.job = "Manager";
console.log(empDet);

let salaryUpdate = empDet.map(x => {
    console.log(x);
    x.salary = 25000;
    return x;
})
console.log(salaryUpdate);
console.table(empDet);/// to convert in table formate
