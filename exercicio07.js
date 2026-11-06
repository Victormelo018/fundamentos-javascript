function verificarIdade(idade){
    if (idade >= 18){
        return ' Maior de idade'
    }
    else {
        return 'Menor de idade'
    }
}

let  idade = prompt("Qual sua idade ?")

let resultado = verificarIdade(idade)
alert(`com a idade ${idade} é ${resultado}`)