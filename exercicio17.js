function classificarNota(nota){
    if (nota > 10  || nota < 0){
        return 'nota inválida'
    }
    else if (nota >= 0  && nota < 5){
        return 'Reprovado'
    }

    if (nota >= 5 && nota < 7){
        return 'Recuperação'
    }
    else {
        return 'Aprovado'
    }
}

console.log(classificarNota(8))  // Aprovado
console.log(classificarNota(6))  // Recuperação
console.log(classificarNota(3))  // Reprovado
console.log(classificarNota(12)) // Nota inválida