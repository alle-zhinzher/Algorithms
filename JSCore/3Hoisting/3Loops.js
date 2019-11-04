/*
Perhaps one area where developers most want block-level scoping of vari-
ables is within for loops, where the throwaway counter variable is meant to
be used only inside the loop. For instance, it’s not uncommon to see code
like this in JavaScript:
*/

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("Loop Ends");

console.log(i); // i is still accessible here


/*
In other languages where block-level scoping is the default, this example
should work as intended—only the for loop should have access to the i vari-
able. However, in JavaScript, the variable i is still accessible after the loop
is completed because the var declaration is hoisted. Using let instead, as in
the following code, should produce the intended behavior:
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// i is not accessible here - throws an error
console.log(i);


/*
The characteristics of var have long made creating functions inside loops
problematic, because the loop variables are accessible from outside the
scope of the loop. Consider the following code:
*/

var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func();
    // outputs the number "10" ten times
});


/*
To fix this problem, developers use immediately invoked function expres-
sions(IIFEs) inside loops to force a new copy of the variable they want to
iterate over to be created, as in this example:
*/
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push((function (value) {
        return function () {
            console.log(value);
        }
    }(i)));
}
funcs.forEach(function (func) {
    func();
    // outputs 0, then 1, then 2, up to 9
});

/*
The ECMAScript 6 specification doesn’t explicitly disallow const declara-
tions in loops; however, const behaves differently based on the type of loop
you’re using.For a normal for loop, you can use const in the initializer,
but the loop will throw a warning if you attempt to change the value.For
example:
*/
var funcs = [];
// throws an error after one iteration
for (const i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
/*
In this code, the i variable is declared as a constant.The first iteration
of the loop, where i is 0, executes successfully.An error is thrown when i++
executes because it’s attempting to modify a constant.As such, you can only
use const to declare a variable in the loop initializer if you’re not modifying
that variable.
On the other hand, when used in a for-in or for-of loop, a const vari-
able behaves similarly to a let variable.Therefore, the following should not
cause an error:
*/
var funcs = [],
    object = {
        a: true,
        b: true,
        c: true
    };
// doesn't cause an error
for (const key in object) {
    funcs.push(function () {
        console.log(key);
    });
}
funcs.forEach(function (func) {
    func(); // outputs "a", then "b", then "c"
});