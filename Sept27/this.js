let obj1 = {
    eName:"sachin",
    id: 123,
    demo: () => {
         console.log(this);
     }
}
console.log(obj1.demo());  ///when we use this keyword in arrow fn it point out window object and here we can't fetch eName or id

let obj2 = {
    eName: "virat",
    id: 345,
    test:function () {
        console.log(this.eName);
    }
}
console.log(obj2.test());   // when we use this keyword in anonymous fn it point out current object and we can fetch the eName and id
console.log(obj2);