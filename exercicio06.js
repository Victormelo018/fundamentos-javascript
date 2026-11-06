function verificarPar (a){
   if (a % 2 === 0) {
        return   'Par'
    }
    else{
        return  ' Impar'
    }
}

let numero = verificarPar(15)
alert(`o numero 15 é ${numero}`)