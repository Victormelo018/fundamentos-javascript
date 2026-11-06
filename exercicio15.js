function somarDez(numero) {
    return numero + 10 
}

function triplicar(numero){
    return numero * 3 
}

function executar (numero, operacao){
    let resultado = operacao(numero)
    return resultado 
}

console.log(executar(5, somarDez))
console.log(executar(4, triplicar))