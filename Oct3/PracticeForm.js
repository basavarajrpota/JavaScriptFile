let form = document.createElement("Form");
document.body.append(form);
form.style.width = "40%";
form.style.height = "130vh";
form.style.backgroundColor = "orange";
form.style.margin = "0 auto";


let h3 = document.createElement("h3");
h3.innerText = "Book A Room Form";
form.appendChild(h3);
h3.style.textIndent = "250px";
h3.style.paddingTop = "20px";


let div1 = document.createElement("div");
form.appendChild(div1);
// div1.style.backgroundColor = "blue";
div1.style.width = "95%";
div1.style.margin = "0 auto";
div1.style.height = "10vh";
div1.style.display = "flex";


let label1 = document.createElement("label");
div1.appendChild(label1);
label1.innerText = "First Name";
label1.style.flexBasis = "50%";
// label1.style.backgroundColor = "red";

let input1 = document.createElement("input");
/* <label htmlFor="fName">First Name</label>   */
label1.appendChild(input1);
input1.style.display = "block";
input1.style.width = "300px";
input1.style.height = "25px";
input1.setAttribute("type", "text");


let label2 = document.createElement("label");
div1.appendChild(label2);
label2.innerText = "Last Name";
label2.style.flexBasis = "50%";
label2.style.paddingLeft="20px"

let input2 = document.createElement("input");
label2.appendChild(input2);
input2.style.display = "block";
input2.style.width = "300px";
input2.style.height = "25px";
input2.setAttribute("type", "text");


let div2 = document.createElement("div");
form.appendChild(div2);
div2.style.width = "95%";
div2.style.margin = "0 auto";
div2.style.height = "10vh";
// div2.style.display = "flex";

let label3 = document.createElement("label");
div2.appendChild(label3);
label3.innerText = "Email";
label3.style.flexBasis = "50%";

let input3 = document.createElement("input");
/* <label htmlFor="fName">First Name</label>   */
label3.appendChild(input3);
input3.style.display = "block";
input3.style.width = "98%";
input3.style.height = "25px";
input3.setAttribute("type", "email");

let div3 = document.createElement("div");
form.appendChild(div3);
div3.style.width = "95%";
div3.style.margin = "0 auto";
div3.style.height = "10vh";


let label4 = document.createElement("label");
div3.appendChild(label4);
label4.innerText = "Phone Number";
label4.style.flexBasis = "50%";

let input4 = document.createElement("input");
label4.appendChild(input4);
input4.style.display = "block";
input4.style.width = "98%";
input4.style.height = "25px";
input4.setAttribute("type", "tel");
input4.setAttribute("placeholder", "+91");

let div4 = document.createElement("div");
form.appendChild(div4);
div4.style.width = "95%";
div4.style.margin = "0 auto";
div4.style.height = "10vh";


let label5 = document.createElement("label");
div4.appendChild(label5);
label5.innerText = "Date of Arrival";
label5.style.flexBasis = "50%";


let input5 = document.createElement("input");
label5.appendChild(input5);
input5.style.display = "block";
input5.style.width = "98%";
input5.style.height = "25px";
input5.setAttribute("type", "dateTime-local");



let div5 = document.createElement("div");
form.appendChild(div5);
div5.style.width = "95%";
div5.style.margin = "0 auto";
div5.style.height = "10vh";

let label6 = document.createElement("label");
div5.appendChild(label6);
label6.innerText = "Date of Departure";
label6.style.flexBasis = "50%";

let input6 = document.createElement("input");
label6.appendChild(input6);
input6.style.display = "block";
input6.style.width = "98%";
input6.style.height = "25px";
input6.setAttribute("type", "dateTime-local");


let div6 = document.createElement("div");
form.appendChild(div6);
div6.style.width = "95%";
div6.style.margin = "0 auto";
div6.style.height = "30vh";
// div6.style.backgroundColor = "red";


let h4 = document.createElement("h3");
div6.appendChild(h4);
h4.innerText = "Room Type";

let input7 = document.createElement("input");
div6.appendChild(input7);
input7.setAttribute("type", "radio");
input7.setAttribute("name", "room");


let label7 = document.createElement("label");
div6.appendChild(label7);
label7.innerText = "Single-$300 per day";
label7.style.paddingLeft = "20px";
label7.style.fontSize = "20px";

let break1 = document.createElement("br");
div6.appendChild(break1);
let break2 = document.createElement("br");
div6.appendChild(break2);

let input8 = document.createElement("input");
div6.appendChild(input8);
input8.setAttribute("type", "radio");
input8.setAttribute("name", "room");


let label8 = document.createElement("label");
div6.appendChild(label8);
label8.innerText = "Deluxe-$500 per day";
label8.style.paddingLeft = "20px";
label8.style.fontSize = "20px";

let break3 = document.createElement("br");
div6.appendChild(break3);
let break4 = document.createElement("br");
div6.appendChild(break4);

let input9 = document.createElement("input");
div6.appendChild(input9);
input9.setAttribute("type", "radio");
input9.setAttribute("name", "room");

let label9 = document.createElement("label");
div6.appendChild(label9);
label9.innerText = "Suite-$800 per day";
label9.style.paddingLeft = "20px";
label9.style.fontSize = "20px";

let break5 = document.createElement("br");
div6.appendChild(break5);
let break6 = document.createElement("br");
div6.appendChild(break6);

let input10 = document.createElement("input");
div6.appendChild(input10);
input10.setAttribute("type", "radio");
input10.setAttribute("name", "room");

let label10 = document.createElement("label");
div6.appendChild(label10);
label10.innerText = "Presidential Suite-$800 per day";
label10.style.paddingLeft = "20px";
label10.style.fontSize = "20px";

let break7 = document.createElement("br");
div6.appendChild(break7);
let break8 = document.createElement("br");
div6.appendChild(break8);

let div7 = document.createElement("div");
form.appendChild(div7);
div7.style.width = "95%";
div7.style.margin = "0 auto";
div7.style.height = "10vh";

let label11 = document.createElement("label");
div7.appendChild(label11);
label11.innerText = "Number of Rooms Required";

let input11 = document.createElement("input");
label11.appendChild(input11);
input11.style.display = "block";
input11.style.width = "98%";
input11.style.height = "25px";
input11.setAttribute("type", "tel");

let div8 = document.createElement("div");
form.appendChild(div8);
div8.style.width = "95%";
div8.style.margin = "0 auto";
div8.style.height = "20vh";
// div8.style.backgroundColor = "red";


let label12 = document.createElement("label");
div8.appendChild(label12);
label12.innerText = "Comments";
label12.style.fontSize = "20px";
let break9 = document.createElement("br");
div8.appendChild(break9);

let textArea = document.createElement("textarea");
div8.appendChild(textArea);
textArea.style.width = "98%";
textArea.style.height = "15vh";

let div9 = document.createElement("div");
form.appendChild(div9);
div9.style.width = "95%";
div9.style.margin = "0 auto";
div9.style.height = "10vh";
div9.style.textIndent = "200px";
div9.style.paddingTop = "30px";



let button = document.createElement("button");
div9.appendChild(button);
button.innerText = "Submit";
button.style.fontSize="20px"
button.style.width = "200px";
button.style.height = "50px";
