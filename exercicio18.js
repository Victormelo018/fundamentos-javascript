function cadastrarUsuario(nome, idade, email){
    if (nome.length === 0){
        return 'Nome inválido'
    }

     if (idade < 18){
        return 'Menor de dadae'
         
    }
    
    if (!email.includes("@")){
        return 'Email inválido'
    }
   
        return 'Cadastro realizado'
    
}

let  resultado = cadastrarUsuario("victor",23,"victor@gmail.com") 

alert(`o resultado é ${resultado}`)


console.log(cadastrarUsuario("", 20, "teste@gmail.com"))

console.log(cadastrarUsuario("Ana", 16, "ana@gmail.com"))

console.log(cadastrarUsuario("Pedro", 25, "pedrogmail.com"))

console.log(cadastrarUsuario("Victor", 23, "victor@gmail.com"))
