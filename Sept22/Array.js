let arr = [1, "hi", null, undefined, function () { }, {}];
console.log(arr);

let arr1 = new Array(10, 20, 30);
console.log(arr1);
console.log(arr1.length);
console.log(arr1[2]);      //to fetch the element of an array
console.log(arr1[3]);      //to fetch the element of an array from exceeded index value it print undefined===//

//===Array methods===//
let arEx = [3, "hire", undefined, true];
//(1)===pop(): removes the values present at the last index position & it affects the original array.
console.log(arEx.pop());//also we can empty an array bay using pop().
console.log(arEx);
console.log(arEx.pop());
console.log(arEx);
console.log(arEx.pop());
console.log(arEx);
console.log(arEx.pop());
console.log(arEx);


//(2)to add the element in an array we can use push(): and it to be added at the last position of an array. and  it affects the original array. we can multiple values
arEx.push("hello",58,false);
console.log(arEx);

// (3)to remove the first element from an array use shift():
let shiftEx = [20, 89, 76];
console.log(shiftEx);
shiftEx.shift()
console.log(shiftEx);


// (4) to add the element at the first position in an array use unshift().

let arr5 = [10, 20, 89];
arr5.unshift("hello");
console.log(arr5);

//splice():it slice the
let test = [10, 20, 30, 40, 50]
test.splice(0,-4, "hello");
console.log(test);  // o/p=hello,20,30,40,50
test.splice(1, 0, "buy");
test.splice(0);
console.log(test);   // o/p=hello,buy,10,20,30,40,50

//by giving index number  we can add new item in that particular index position
test[1] = "come"
console.log(test);  // o/p=hello,come,10,20,30,40,50
test.splice(0);
console.log(test);

//slice()
var x = [12, 23, 34, 56]
console.log(x.slice(0,3));
console.log(x);

//indexOf():it give particular element index value
let start = [10, 78, 93, 83];
console.log(start.indexOf(78));
console.log(start.indexOf(1000));

//includes(): it check whether passed element present inside the array or not it gives true/false.
console.log(start.includes(83));   //  o/p=true
console.log(start.includes(100));    //  o/p=false

//concat():marge two array's
let n1 = [1, 2, 3, 4, 5];
let n2 = [6, 7, 8, 9, 10];
console.log(n1 + n2);   //   o/p=1,2,3,4,56,7,8,9,10
console.log(n1.concat(n2));


//flat():
let arr6 = [1, 2, 3, [4,,5]];
console.log(arr6.flat());   //  o/p= 1,2,3,4,5

let arr7 = [1, 2, [3, 4, [5, 6]]]
console.log(arr7.flat(2));


// sort():it sorts like alphabetic order starting with small followed by bigger
let arr8 = [3, 6, 9, 12, 15];
console.log(arr8.sort()); // o/p=12,15,3,6,9

let arr10 = [1, 111, 12, 116, 111, 67, "a", "ravi", "ratan","56rakesh","naveen1","%","*","$",1111,"@","1A","1a","~","!","-9999","-90","-1","+","-","=","/","^"];
console.log(arr10.sort());

let z = [9, 1, 3, 8, 88]
console.log(z.sort((a, b) => { return b - a }));  // descending order p/p=88,9,8,3,1
console.log(z.sort((a, b) => { return a-b }));  // descending order p/p=1,3,8,9,88



let abc = [10, 30, 6804,];
abc.splice(0, 2,"hello");
console.log(abc);
console.log(abc.indexOf("hello"));

abc[1] = "hi";
console.log(abc);