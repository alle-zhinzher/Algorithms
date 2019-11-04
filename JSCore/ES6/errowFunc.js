const sum = (a, b) => a + b;
const cube = number => number ** 3;

// Lambda functions in object 
const age = 20;
const person = {
    name: "Elena",
    age: 20,
    sayName: function () { console.log(this) },
    sayAge: () => { console.log(this) }
}

person.sayName(); // Elena Create own context and bind to context where funcion was called
person.sayAge(); // undefined Not create own context




