//! 10. Program Check whether the string is palindrome or not

const string = prompt("Enter a string: ");
const value = checkPalindrome(string);
console.log(value);

function checkPalindrome(str) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
"12.00"