const string = prompt("Enter a string: ");
const value = checkPalindrome(string);
console.log(value);

function checkPalindrome(str) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 2 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
// ("12.00");

// let str = "thiru";
// let str2 = "";
// for (let i = str.length - 1; i >= 0; i--){
//     str2 +=  str.charAt(i);
// }
// console.log(str2);

// let num = prompt("enter the number");
// let r = 0;
// let temp = num;
// function palindrome(){
//     while (num != 0) {
//         let x = num % 10;
//         r = r * 10 + x;
//         num = num / 10;
//     }
//     return r;
// }
// palindrome();
// if (r == num) {
//     console.log("number is palindrome");
// }
// else {
//     console.log("number is not palindrome");
// }