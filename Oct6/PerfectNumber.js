let number = prompt("enter the number");
let sum = 0;
// let temp = number;
for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
        sum += i;
    }
}
  if (sum == number) {
    console.log("The number is a perfect number");
  } else {
    console.log("The number is not a perfect number");
  }