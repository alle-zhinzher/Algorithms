const byId = document.getElementById('id1');
const classSelector = document.getElementsByClassName('main');
const byQuerySelector = document.querySelector(".main p:last-child")
byQuerySelector.textContent = "Work"

for (let i = 0; i < classSelector.length; i++) {
    classSelector[i].textContent += "hello"
}

console.log(byId);
console.log(classSelector);
console.log(byQuerySelector);
