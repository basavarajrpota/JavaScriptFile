let empDetails = {
  eName: "ratan",
  ID: "TYSS123",
  company: "TYSS",
};
console.log(empDetails);
empDetails.city = "Bengalore";
console.log(empDetails);
empDetails.city = "Delhi";
console.log(empDetails);
empDetails.eName = " Tata";
console.log(empDetails);
empDetails.Address ={
    pin: 587125,
    Area:"Vinayak Nagar",
}
console.log(empDetails);

// we can use assignment operator also
empDetails.eName += " Ta";
console.log(empDetails);

// deleting a key
delete empDetails.ID;
console.log(empDetails);





let xyz = 234;
let mno = 20;
let ex = "hi";
console.log(typeof (xyz));
console.log(typeof (mno));
console.log(typeof(ex));s