const number = busStops => {
    const total = busStops.reduce((acc, currentBusStation) => acc + currentBusStation[0] - currentBusStation[1], 0)
    console.log(total)
}

number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])