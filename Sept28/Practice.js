// let x = [1, 2, 3, 4];

// function arr(x,cb) {
//     let x1 = [];
//     for (let i = 0; i < x.length; i++){
//         x1.push(cb(x[i]));
//     }
//     return x1;
// }
// console.log(arr([10, 20, 30, 40], val => { return val + 11; }));
   

// let arr=x.map(val => {
//     return val + 10;
// })
// console.log(arr);

// console.log(x.filter(val=>{return val>1})); 
function Filter(x, y) {
    let x1 = [];
    for (let i = 0; i < x.length; i++){
        if (y(x[i])){
            x1.push(x[i]);
        }
        
    }
     return x1;
}
console.log(Filter([100,200,300],val=>{return val>=100}));