[10] == [10] //false

const oldArray = [];
const object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray); // true