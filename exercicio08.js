function maiorNumero(a,b){
    if (a > b){
        return (a)
    }
    else {
        return (b)
    }
}

let number1 = parseInt(prompt("digite um valor"))
let number2 = parseInt(prompt("digite outro valor"))

resultado = maiorNumero(number1,number2)

alert (` o maior numero é : ${resultado}`)