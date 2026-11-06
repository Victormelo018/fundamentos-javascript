function verificarNumero(a){
    if (a > 0){
        return 'Positivo'
    }
     else  if( a < 0){
        return ' Negativo'
    }
    else {
        return' Zero'
    }
}

let numero = parseInt(prompt("digite um numero"))

resultado = verificarNumero(numero)

alert(`o numero ${numero} è ${resultado}`)