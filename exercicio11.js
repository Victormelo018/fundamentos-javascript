function calcularDesconto (p,d){
   let  calculo = p - ((p * d) / 100)
    return calculo
}

let preco = parseInt(prompt("qual o valor da conta ?"))

let porcentagem = parseInt(prompt("quantos por cento de desconto ?"))

let resultado = calcularDesconto(preco,porcentagem)

    console.log(resultado);
    alert(`o valor final é ${resultado}`)
