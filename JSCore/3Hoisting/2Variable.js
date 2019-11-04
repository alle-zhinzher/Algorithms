console.log(i); // undefined
var i = 5;
console.log(i); // 5

// !!!!!  let and const not hoisted!

console.log(i); // ReferenceError: Cannot access 'i' before initialization
const c = 5;
console.log(c); // 5

console.log(x); // ReferenceError: Cannot access 'i' before initialization
let x = 5;
console.log(x); // 5


if (condition) {
    console.log(typeof value); // throws an error
    let value = "blue";
}


/*
Here, the variable value is defined and initialized using let, but that
statement is never executed because the previous line throws an error.
The issue is that value exists in what the JavaScript community has dubbed
the temporal dead zone(TDZ).The TDZ is never named explicitly in the
ECMAScript specification, but the term is often used to describe why let
and const bindings are not accessible before their declaration.This sec-
tion covers some subtleties of declaration placement that the TDZ causes,
and although the examples shown use let, note that the same information
applies to const .
When a JavaScript engine looks through an upcoming block and finds
a variable declaration, it either hoists the declaration to the top of the func -
tion or global scope(for var ) or places the declaration in the TDZ(for let
and const ).Any attempt to access a variable in the TDZ results in a runtime
error.That variable is only removed from the TDZ, and therefore is safe to
use, once execution flows to the variable declaration.
This is true anytime you attempt to use a variable declared with let or
const before it’s been defined.As the previous example demonstrated, this
even applies to the normally safe typeof operator.However, you can use
typeof on a variable outside the block where that variable is declared with-
out throwing an error, although it may not produce the results you’re after.
Consider this code:
*/

console.log(typeof value);// "undefined"

if (condition) {
    let value = "blue";
}