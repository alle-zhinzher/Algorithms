class Animal {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }
    static type = "ANIMAL";

    voice() {
        console.log("Wuuf");
    }
}


class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    static type = "CAT"

    voice() {
        super.voice();
        console.log("Cat say Miay");
    }

    get catAge() {
        return this.age * 7;
    }

    set catAge(newAge) {
        this.age = newAge;
    }
}