let val=document.getElementsByTagName("h1");
console.log(val[0].innerText);
console.log(window);
let x = document.createElement("div")
x.innerText = "hello";
x.style.color = "red";
console.log(x);
document.write(x);

let m = document.createElement("p");
let n = document.createElement("h1");
n.innerText = "hi";
m.appendChild(n);
console.log(m);
