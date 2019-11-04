// Rest using in function arguments

const fn = (a, b, ...args) => { console.log(c) };
fn(54, 54, 54, 54, c = 5, n = 5, 54)

// Spred using for unpack
// Destrac for assign variables

// Warning
const person = {
    name: "Allex",
    sayName: function () { console.log(this.name) }
}

const { sayName, name: personName } = person;
sayName() // Undefined bacouse func lose context of person
person.sayName()
console.log(personName);