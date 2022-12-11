let section = document.createElement("section");
document.body.append(section);
section.style.width = "100%";
section.style.height = "12vh";
section.style.backgroundColor = "gray";

let article = document.createElement("article");
section.appendChild(article);
article.style.width = "85%";
article.style.height = "12vh";
article.style.backgroundColor = "orange";
article.style.margin = "0 auto";
article.style.display = "flex";
article.style.alignItems = "center";
// article.style.justifyContent = "centre";


let div1 = document.createElement("div");
article.appendChild(div1);
div1.style.flexBasis = "30%";
// div1.style.backgroundColor="blue"
div1.innerText = "Logo";


let div2 = document.createElement("div");
article.appendChild(div2);
div2.style.flexBasis = "70%";

// div2.style.backgroundColor = "gold";



let ul = document.createElement("ul");
div2.appendChild(ul);
ul.style.display = "flex";
ul.style.listStyle = "none";
ul.style.justifyContent = "space-around";




let li1 = document.createElement("li");
ul.appendChild(li1);
li1.innerText = "Home";
let li2 = document.createElement("li");
ul.appendChild(li2);
li2.innerText = "Login";
let li3 = document.createElement("li");
ul.appendChild(li3);
li3.innerText = "Register";