console.log("start");
function x(m, n) {
  var a = 100;
  function y() {
    //innner function starts here
    console.log(m);
    console.log(n);
    console.log(a);
   
  }                                //another way to call inner function
  y(); //innner function ends here        //  return y;
}                                          // }
x(10, 7);                                  //  x(10,7)();
console.log("end");                       //another way to call inner function
                                             //  return y;
                                             //}
                                           //  let m=x(10,7);
                                           //m();