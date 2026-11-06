function calcularDesconto( preco, desconto = 0){

let resultado =  preco - (( preco * desconto ) / 100) 
return resultado

}

function finalizarCompra(nome, preco, desconto){
    if (nome.length === 0){
        return 'Cliente inválido'
    }

    if  (preco <= 0){
        return 'Preço inválido'

    }

    desconto = calcularDesconto(preco,desconto)

    return (`${nome}, o total da compra é R$ ${desconto}`)

}


console.log(finalizarCompra("Victor", 100, 10))
// Victor, o total da compra é R$ 90

console.log(finalizarCompra("Ana", 200, 25))
// Ana, o total da compra é R$ 150

console.log(finalizarCompra("", 100, 10))
// Cliente inválido

console.log(finalizarCompra("Pedro", -50, 10))
// Preço inválido