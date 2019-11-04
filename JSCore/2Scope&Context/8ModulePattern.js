/*
The return statement of the Module contains our public functions.
The private functions are just those that are not returned.
Not returning functions makes them inaccessible outside of the Module namespace.
But our public functions can access our private
functions which make them handy for helper functions, AJAX calls, and other things.
*/

var Module = (function () {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function () {
            // can call privateMethod();
        }
    };
})();

Module.publicMethod(); // works
Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined