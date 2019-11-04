/*
Another way in which let and const are different from var is in their global
scope behavior.When var is used in the global scope, it creates a new global
variable, which is a property on the global object(window in browsers).That
means you can accidentally overwrite an existing global using var , as this
code does:
*/
var RegExp = "Hello!"; // in a browser
console.log(window.RegExp); // "Hello!"
var ncz = "Hi!";
console.log(window.ncz); // "Hi!"
/*
Even though the RegExp global is defined on the window object, it is not
safe from being overwritten by a var declaration.This example declares
a new global variable RegExp that overwrites the original.Similarly, ncz is
defined as a global variable and then defined as a property on window imme -
diately afterward, which is the way JavaScript has always worked.
If you instead use let or const in the global scope, a new binding is
created in the global scope but no property is added to the global object.
That also means you cannot overwrite a global variable using let or const
declarations; you can only shadow it.Here’s an example:
*/
// in a browser
let RegExp = "Hello!";
console.log(RegExp);
console.log(window.RegExp === RegExp); // "Hello!"
// false
const ncz = "Hi!";
console.log(ncz); // "Hi!"
console.log("ncz" in window); // false
/*
A new let declaration for RegExp creates a binding that shadows the global
RegExp . Because window.RegExp and RegExp are not the same, there is no disrup-
tion to the global scope. Also, the const declaration for ncz creates a binding
but does not create a property on the global object. This lack of global object
modification makes let and const much safer to use in the global scope when
you don’t want to create properties on the global object.
*/