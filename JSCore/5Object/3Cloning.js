let user = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта.
clone.name = "Pete"; // изменим в нём данные

alert(user.name); // в оригинальном объекте значение свойства `name` осталось прежним – John.



let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }


//Если принимающий объект(user) уже имеет свойство с таким именем, оно будет перезаписано:

let user = { name: "John" };

// свойство name перезапишется, свойство isAdmin добавится
Object.assign(user, { name: "Pete", isAdmin: true });

// now user = { name: "Pete", isAdmin: true }



let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

alert(user.sizes.height); // 182
/*
Теперь при клонировании недостаточно просто скопировать clone.sizes = user.sizes, 
поскольку user.sizes – это объект, он будет скопирован по ссылке.А значит объекты 
clone и user в своих свойствах sizes будут ссылаться на один и тот же объект:
*/
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, один и тот же объект

// user и clone обращаются к одному sizes
user.sizes.width++;       // меняем свойство в одном объекте
alert(clone.sizes.width); // 51, видим результат в другом объекте