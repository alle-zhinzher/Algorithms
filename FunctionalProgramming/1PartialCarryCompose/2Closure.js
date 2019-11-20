// More specific function
const log = (base, n) => Math.log(n) / Math.log(base);

// Put specific function in closure to create more abstract function
const createLog = base = n => log(base, n);

// Usage
const lg = createLog(10);
const ln = createLog(Math.E);

//With bind
const lg = log.bind(null, 10);
const ln = log.bind(null, Math.E);