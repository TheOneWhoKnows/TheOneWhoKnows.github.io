var number = document.getElementById('number')

function add() {
    var add1 = parseFloat(number.textContent) + 1
    number.textContent = add1
}

function subtract() {
    var subtract1 = parseFloat(number.textContent) - 1
    number.textContent = subtract1
}

function multiply() {
    var multiply2 = parseFloat(number.textContent) * 2
    number.textContent = multiply2
}

function divide() {
    var divide2 = parseFloat(number.textContent) / 2
    number.textContent = divide2
}

function negate() {
    var negatenumber = parseFloat(number.textContent) * -1
    number.textContent = negatenumber
}

function reset() {
    var resetNumber = 0
    number.textContent = resetNumber
}

function square() {
    var square2 = Math.pow(parseFloat(number.textContent), 2)
    number.textContent = square2
}

function squareRoot() {
    var square12 = Math.pow(parseFloat(number.textContent), .5)
    number.textContent = square12
}

function makeLen() {
    var len = ';_;'
    number.textContent = len
}