/*
    The concept of closures is closely related to Lexical Scope,
which we studied above. A Closure is created when an inner
function tries to access the scope chain of its outer function
meaning the variables outside of the immediate lexical scope.
Closures contain their own scope chain, the scope chain of
their parents and the global scope
*/

function greet() {
    name = 'Hammad';
    return function () {
        console.log('Hi ' + name);
    }
}

greet(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
greetLetter = greet();

// calling greetLetter calls the returned function from the greet() function
greetLetter(); // logs 'Hi Hammad'