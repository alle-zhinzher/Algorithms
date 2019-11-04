const log = text => console.log(text)


const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log("Colling func......")
        return target.apply(thisArg, args);
    },

})

fp("Deefewfwe")

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log("Constriuct.....");
        return new target(...args);
    }
}) 