const delay = time => {
    new Promise(r => setTimeout(() => r(), time))
}

fetchTodos = () => {
    new Promise(r => setTimeout(() => r(), 3000))
}
const ull = "https://jsonplaceholder.typicode.com/"
async function fetchData() {
    try {
        await delay(2000);
        const respons = await fetch(url)
        const data = await respons.json()
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

fetchData()