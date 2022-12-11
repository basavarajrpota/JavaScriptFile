//Number

let a = 10.54;
// console.log(parseInt(a));
console.log(parseFloat(a));

//Boolean
// console.log(10 > 5);

// let str = "Hello";
console.log(typeof str);

//String
// let str1 = "hello";
// console.log(str1);
str1 = "hello world";
console.log(str1.toUpperCase(3));
console.log(str1.length); //o/p=11 including space also
console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleLowerCase());
console.log(str1.indexOf("w"));
console.log(str1.indexOf("W"));//here cha in upper case o/p will be -1 or if we passsed absent value result will be -1
console.log(str1.lastIndexOf("l"));

console.log(str1.charAt(9));   //o/p=l
console.log(str1.charAt(10));//  o/p=d
console.log(str1.charAt(1)); //o/p=e
console.log(str1.slice(-5,-2));
console.log(str1);
console.log(str1.substring(0, 4));

let z = "Parrot";
let x = "";
for (let i = z.length-1 ; i >= 0; i--){
    x += z[i];
}
 console.log(x);

// let str = "demo";
// console.log(str.split("").reverse().join(""));