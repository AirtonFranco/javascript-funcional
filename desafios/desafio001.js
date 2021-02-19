//some 3 numeros passando função dentro de função

function somar (a) {
    return function (b) {
        return function (c) {
            return console.log(a + b + c)
        }
    }
}


const Result = somar(3)(3)
Result(3)

//Ou pode chamar dessa forma
somar(2)(2)(2)

//#######################################

function calcular (x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

function subtrair (a, b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

const result1 = calcular(25)(5)(multiplicar)
const result2 = calcular(25)(5)(subtrair)
console.log(result1)
console.log(result2)