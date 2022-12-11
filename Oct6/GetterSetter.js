let person = {
    firstName: "Ratan",
    lastName: "Tata",
    language: "",
    set l(x) {
        this.language = x;
    }
};
person.l = "Kannada";
console.log(person.language);