const isBiger = (value, maxValue) => value > maxValue

const getMaxValue = (maxValue, current=0, currentBanc=0, temp={}) =>{
    banc = [500, 200, 100, 50, 20, 5, 2, 1]
    if  (current === maxValue) { return temp };
    if (current + banc[currentBanc] > maxValue) { 
        currentBanc++
        return getMaxValue(maxValue, current, currentBanc, temp)
    } else {
        current += banc[currentBanc]
        if (temp[banc[currentBanc]]) {
            temp[banc[currentBanc]]++
        }
        temp[banc[currentBanc]] = temp[banc[currentBanc]]++ || 1
        return getMaxValue(maxValue, current, currentBanc, temp)
    };
}

console.log(getMaxValue(1283));


