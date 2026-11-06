function calcularSubtotal(preco, quantidade){
    let result = preco * quantidade
    return result
}

function calcularTotal(preco, quantidade, frete){
    let subtotal = calcularSubtotal(preco,quantidade)
    let total = subtotal + frete
    return total

}

let preco =parseFloat(prompt("qual o preço do produto ?"))

let quantidade = parseInt(prompt("quantas unidades esta levando ?"))

let frete =parseFloat(prompt("Quanl valor do frete ? "))

alert(` o final foi ${calcularTotal(preco,quantidade,frete)}`)