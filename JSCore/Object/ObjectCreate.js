const person = Object.create(
    {}, //Ptotype
    {
        name: {
            value: 'Oleksandr',
            writable: true, // Posible to change
            enumerable: true, // Is iterable in loop
            configurable: true // Posible to delete
        },
        birthYaer: {
            value: 1993,
            writable: false,
            enumerable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYaer
            },
            set(value) {
                console.log(value)
            }
        }
    }
)
