// let emp = {
//     eName: "Tata",
//     EID: 1234,
//     Age: 25,
// };
// console.log(emp);
// console.log(typeof (emp));
// let x=(JSON.stringify(emp));
// console.log(x);
// console.log(JSON.parse(x));
// console.log(typeof (x));

// =====De-Structuring====
// Array  De-Structuring
// let arr = [10, 20, 30, 40];
// const [a, b,c, d] = arr;  //o/p==> 10  20  30  40
// const [a, b] = arr;          //o/p==> 10  20
// const [a, c,b, d] = arr;  //o/p==> 10  20  30  40
// const [a, , ,d] = arr;    //o/p==> 10          40
// console.log(b);
// console.log(a);
// console.log(d);
// console.log();


//====Object De-structuring
// let emp = {
//     eName: "Ratan",
//     Eid: 1234,
//     Location:"Bengalore"
// }
// console.log(emp);
// let { eName:Name, Eid: id, Location: place } = emp;  //we can change key values like this
// console.log(Name);
// console.log(id);
// let {...emp1} = emp;
// console.log(emp1);


let PersonDetails = {
    eName: "Ratan",
    Email: "rai99@gmail.com",
    MaritalState: "No",
    Address: {
        Place: "Ilkal",
        Pincode:587-125,
        Landmark:"Near PoliceGround",
    }
}
// console.log(PersonDetails);
// let PersonDetails1 = { ...PersonDetails };

let AllDetails = {
   Ename: "Tata",
    Tel: 9988776655,
    Qualification:"BE"
}
console.log(AllDetails);
// let AllDetails1 = { ...AllDetails };
// console.log(...PersonDetails1,...AllDetails1)
let add = {...PersonDetails,...AllDetails};
console.log(add);
// console.log(add,...AllDetails);


const teacher = {
    name: "XYZ",
    age: 30,
    Subject: ["social", "Maths"],
};
const address = {
    city: "Bengalore",
    pincode: 5677894,
    landmark:"School"
}
const x = { ...teacher, ...address };
console.log("Teacher with address", x);

let y = { ...teacher, phone: 123456789, marriedStatus: "no" };
console.log("Teacher with phone Number", y);


let person = {
    name: "nvmvm",
    age: 25,
    place:"nsjkfj"
}
let o = { ...person };
console.log(o);
person.name = "Sundar";
console.log(person);  //name=sundar
console.log(o);       //name=nvmvm


