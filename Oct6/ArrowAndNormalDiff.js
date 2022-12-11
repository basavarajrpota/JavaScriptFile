let x = {
    username: "Sachin",
    Company: "Sky Builders",
    Details: function () {
        console.log(this);
    },
    details1 : () => {
        console.log(this);
    }
}
x.Details();//current object
x.details1();//point towards window object