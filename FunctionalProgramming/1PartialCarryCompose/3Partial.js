// Goal Abstract from closure and make different function in partial closure

// Elementary
const partial = (fn, x) => (...args) => fn(x, ...args);

// Usage
const sum4 = (a, b, c, d) => a + b + c + d;

const f11 = partial(sum4, 1);
const f21 = partial(f11, 2);
const f31 = partial(f21, 3);
const y1 = f31(4);

console.log(y1); // 10


// Intermediate
const partial2 = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const f2_11 = partial2(sum4, 1, 2);
const f2_21 = partial2(f2_11, 3);
const y2 = f2_21(4);

console.log(y2); // 10

