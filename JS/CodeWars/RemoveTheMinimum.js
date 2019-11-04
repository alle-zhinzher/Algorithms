function removeSmallest(numbers) {
    const indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
}

console.log(removeSmallest([4, 5, 6, 1, 2, 21, 3, 1]))