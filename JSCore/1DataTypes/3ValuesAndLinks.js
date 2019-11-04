let a = 42;
//When we assign primitives to the variable, we copy the value.
let b = a; // Copy just VALUE not link
b++
// this is also true for string, boolean, null, undefined
console.log(a) // 42
console.log(b) // 43


//  When we assign Objects(non - primitives) to the variable,
// we copy them by reference.You can imagine, that by declaring
// a variable we create new address in memory.
// When we declare variable b it just points to this address.
// So when we update the content of this address,
// both variable a and b have the same value.

let a2 = [1, 2, 3];
let b2 = a2 // Copy link on the value
b2.push(4);
console.log(a2) // [ 1, 2, 3, 4 ]
console.log(b2) // [ 1, 2, 3, 4 ]

var a3 = {};
var b3 = a3;
a3.a = 1;
console.log(a3); // {a: 1}
console.log(b3); // {a: 1}

/*
Primitives(copied by value)
    1. null
    2. undefined
    3. Number
    4. String
    5. Boolean
Objects(copied by reference)
    1. Object
    2. Array
    3. Function
*/