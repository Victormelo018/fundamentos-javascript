function calcularFrete(valorCompra, frete = 10 ){
let    total = valorCompra + frete
    return total
}

let valorCompra = parseInt(prompt("qual valor da compra ?"))

let resultado = calcularFrete(valorCompra)

alert(`o total com o frete foi ${resultado}`)