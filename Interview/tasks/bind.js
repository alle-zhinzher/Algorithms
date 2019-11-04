Function.prototype.myOwnBind = function (newThis) {

    var boundTargetFunction = this;
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    return function boundFunction() {
        var targetArguments = Array.prototype.slice.call(arguments);
        return boundTargetFunction.apply(
            newThis,
            boundArguments.concat(targetArguments)
        );
    };
};

function ax(b, c, d) { console.log(this.a, b, c, d) }

const person = { a: 65, b: 1, c: 1 };

ax.myOwnBind(person)(5, 4, 6);