function verificarAprovacao(nota1,nota2){
    let media = (nota1 + nota2 ) / 2 

    if (media >= 7 ){
        return ' Aprovada'
    }
    else {
        return  'Reprovado'
    }
}

let numero1 = parseInt(prompt("qual sua primeira nota ?"))

let number2 = parseInt(prompt("qual a sua segunda nota ?"))

let resultado = verificarAprovacao(numero1,number2)

alert(`o aluno foi ${resultado}`)