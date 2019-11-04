const person = {
    name: "Oleksandr",
    age: 25,
    jub: "Developer"
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log("Getting prop", prop);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error("Prop does not exist")
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log("Deleting....", prop);
        delete target[prop]
    }
})



