const  calcularImposto = (preco,taxa) =>
      preco + ((preco * taxa )/100)


let resultado = calcularImposto(50,10)

console.log(resultado)