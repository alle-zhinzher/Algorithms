function myNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj
}