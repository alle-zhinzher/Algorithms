/*
                Преобразование к примитивам
Алгоритм преобразований к примитивам следующий:

    1. Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует.
        Иначе, если хинт равен "string"
    2. Происходит попытка вызвать obj.toString(), затем obj.valueOf(), смотря что есть.
        Иначе, если хинт равен "number" или "default"
    3. Происходит попытка вызвать obj.valueOf(), затем obj.toString(), смотря что есть.


Мы можем тонко настраивать строковые и численные преобразования, 
используя специальные методы объекта.

Существуют три варианта преобразований(«три хинта»), описанные в спецификации:
"string"
Для преобразования объекта к строке, когда операция ожидает получить строку, например alert:
alert(obj);
*/
// используем объект в качестве имени свойства
anotherObj[obj] = 123;
"number"
//Для преобразования объекта к числу, в случае математических операций:
// явное преобразование
let num = Number(obj);

// математическое (исключая бинарный оператор "+")
let n = +obj; // унарный плюс
let delta = date1 - date2;

// сравнения больше/меньше
let greater = user1 > user2;
"default"
// Происходит редко, когда оператор «не уверен», какой тип ожидать.

//Например, бинарный плюс + может работать с обоими типами: строками(объединять их) 
//и числами(складывать).Таким образом, и те, и другие будут вычисляться.Или когда 
//происходит сравнение объектов с помощью нестрогого равенства == со строкой, 
//числом или символом, и неясно, какое преобразование должно быть выполнено.

// бинарный плюс
let total = car1 + car2;

// obj == string/number/symbol
if (user == 1) { };


//Symbol.toPrimitive
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500


//          Методы toString / valueOf

// toString -> valueOf для хинта со значением «string».
// valueOf -> toString – в ином случае.

let user = {
    name: "John",
    money: 1000,

    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500