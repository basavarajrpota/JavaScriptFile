//direct access
console.log(document.doctype);
console.log(document.title);
console.log(document.body);
console.log(document.head);
console.log(document.styleSheets);
console.log(document.images);
console.log(document.scripts);
console.log(document.contentType);
console.log(document.documentURI);
console.log(document.URL);
console.log(document.embeds);
console.log(document.open("https://www.google.coom"));
console.log(document.nodeType);
console.log(document.ELEMENT_NODE);
console.log(document.all);


//html collections
let allProperties = window.document.all;
console.log(allProperties);
console.log(Array.isArray(allProperties));

let convertIntoArray = Array.from(allProperties);
console.log(convertIntoArray);
console.log(Array.isArray(convertIntoArray));

//foreach for only array and nodeList
[...allProperties].forEach(val => {
    console.log(val);
});


//looping elements
for (let i = 0; i < allProperties.length; i++){
    console.log(allProperties[i]);
}

for (let i of allProperties) {
    console.log(i);
}
