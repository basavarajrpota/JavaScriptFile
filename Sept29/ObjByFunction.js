function StuDetails(eName, ID, City){
    this.eName = eName;
    this.ID = ID;
    this.City=City
}
let s1 = new StuDetails("Manju", 26, "Ilkal");
let s2 = new StuDetails("Karthik", 27, "Jaipur");
let s3 = new StuDetails("Sachin", 40, "Bengalore");
let s4 = new StuDetails("Akshay", 45, "Hyadrabad");
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
s2.PhoneNo = 9868523523;
console.log(s2);


let n = [s1, s2, s3, s4];
for (let x of n) {
  console.log(x.eName);
}
// for (let o in StuDetails) {
//   console.log(o.StuDetails);
// }


let y=n.map(val => {
    return val.City;
})
console.log(y);
let m = n.map(val => {
  return val.eName;
});
console.log(m);