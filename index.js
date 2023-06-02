const toRomanBtn = document.getElementById('toRomanBtn')
const toDecBtn = document.getElementById('toDecBtn')

toDecBtn.addEventListener('click', (ev) => {
    ev.preventDefault()

    const romanValue = document.getElementById('romano').value.toUpperCase()
    let previusValue = 0
    let decimalValue = 0
    let equalCount = 0;


    const romanToDecimal = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };

    if (!isNaN(romanValue) || romanValue === '') {
        alert("O formato não corresponde ao de um número romano!")
    } else {
        for (let index = romanValue.length - 1; index >= 0; index--) {
            const element = romanValue[index];
            const currentValue = romanToDecimal[element]
    
            if (currentValue >= previusValue) {
                decimalValue += currentValue
                if (currentValue === previusValue) {
                    equalCount++
                    if (equalCount > 2) {
                        alert("Número Romano Inválido")
                        return
                    }
                } else {
                    equalCount = 0
                }
            } 
            else {
                decimalValue -= currentValue
                equalCount = 0
            }
            previusValue = currentValue    
        }
        document.getElementById('decimal').value = decimalValue
    }
})

toRomanBtn.addEventListener('click', (ev) => {
    ev.preventDefault()

    let decValue = parseInt(document.getElementById('decimal').value) 
    let romanValue = ''

    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const simbolos = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ]

    if (decValue >= 1 && decValue < 4000) {
        for (let index = 0; index < valores.length; index++) {
            const element = valores[index];
            while (decValue >= element) {
                romanValue += simbolos[index]
                decValue -= element
            }
        }
    
        document.getElementById('romano').value = romanValue
    } else {
        alert("Fora do intervalo permitido!")
    }

    
})






