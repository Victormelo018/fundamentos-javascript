function criarMensagem(nome , saudacao = "olá"){

    if (nome.length === 0){
        return 'Nome obrigatório'
    }
    return `${saudacao}, ${nome}`
}


console.log(criarMensagem("Victor"))


console.log(criarMensagem("Ana", "Bom dia"))


console.log(criarMensagem(""))


console.log(criarMensagem("Pedro", "Boa noite"))