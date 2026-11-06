function verificarSenha(senha){
    if (senha.length >= 8 ){
        return true
    }
    else{
        return false
    }
}

console.log(verificarSenha("abc123"))     
console.log(verificarSenha("senha12345")) 