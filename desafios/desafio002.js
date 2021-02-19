//some todos os valores de um array

const somar = (numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))