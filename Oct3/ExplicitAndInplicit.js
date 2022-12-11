function test() {
    return "shashi";  // return keyword is must and it is explicit return;
}
console.log(test());
let arrowFunction = () => {
  return "Shiva"; // return keyword is must and it is explicit return;
}
console.log(arrowFunction());

let arrowFunction1 = () => "Shiva"; //this one is implicit return;
console.log(arrowFunction1());


//implicit with array value
let arrowWithArray = () => ["hello", "hi"];
console.log(arrowWithArray()); // (2) ["hello", "hi"]

function demo() {
    return ['kamal', 'hassan'];  //explicit array value
}
console.log(demo());// o/p (2)['kamal', 'hassan']


//explicit in object
function test1() {           //in normal function
    return{username: "rakesh",password:"1234"}
}
console.log(test1());  //{username: 'rakesh', password: '1234'}

let arrowWithObj = () => {            //in arrow function
    return { username: "rakesh", password: "1234" };
}
console.log(arrowWithObj());   //{username: 'rakesh', password: '1234'} 

//implicit  in object only in arrow function
let arrowWithObj1 = () => ({ username: "rakesh", password: "1234" });
console.log(arrowWithObj1());   //{username: 'rakesh', password: '1234'}

//implicitly returning string
let str = val => val;
console.log(str('welocome'));

//implicitly returning array
let arr = (...val1) => val1;
console.log(arr('html', 'css', 'js'));

//implicitly returning object
let obj = ({ ...val2 }) => val2;
console.log(obj({ username:'rahul',password: '1234'}));


//implicit nested arrow function
let arrowWithImplicit = _ =>_=> console.log("child here");
arrowWithImplicit()( );  //this is called consized coding

// explicit nested normal function
function Parent() {
    return function child() {
        return ("i am child");
    }
}
console.log(Parent()());

// explicit
let arrowFun = () => {
    return () => {
        return "hello";
    }
}
console.log(arrowFun()());

//
let arrowWithExplicit = () => {
    return val => {
        return val;
    }  
}
let val = arrowWithExplicit()("Dussera");
console.log(val);

//
let arrowWithExplicit1 = () => val => val;
let val12 = arrowWithExplicit1()("Deepawali");
console.log(val12);

//if we dont have parameter then we go for underscore(_)
let p = _ => "sachin";
console.log(p());

let r = () => (`<h1>Welcome</h1>
<p>Mysore Dasara</p>`);
console.log(r());


//constructor function
function user31(name,age, company) {
    this.name = name;
    this.age = age;
    this.company = company;
}
let user123 = new user31('ratan', 25, "sky builders");  //here this point towards current object.
let user124 = new user31("sachin", 24, "sky builders");

console.log(user123, user124);



function Employee(Name, Age, ID, Company, Salary) {
    this.Name = Name;
    this.Age = Age;
    this.ID = ID;
    this.Company = Company;
    this.Salary = Salary;
}
let emp1 = new Employee("Rahul", 25, "TY1234", "TYSS", 25000);
let emp2 = new Employee("Deepak", 25, "TY1256", "TYSS", 25500);
let emp3 = new Employee("Naveen", 25, "TY1246", "TYSS", 25500);
let emp4 = new Employee("Suresh", 25, "TY1278", "TYSS", 20500);
let emp5 = new Employee("Rajesh", 25, "TY1213", "TYSS", 25000);

console.log(emp1, emp2, emp3, emp4, emp5);