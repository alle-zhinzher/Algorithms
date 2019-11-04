/*
    Lexical Scope means that in a nested group of functions,
the inner functions have access to the variables and other
resources of their parent scope. This means that the child
functions are lexically bound to the execution context of their parents.
Lexical scope is sometimes also referred to as Static Scope.
*/

function grandfather() {
    var name = 'Hammad';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}