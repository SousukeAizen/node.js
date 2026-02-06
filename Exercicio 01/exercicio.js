//Import da Biblioteca
var readline = require ('readline')

// Cria uma interface para entrada e saida de dados pelo terminal

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada de dados para o nome do usuario
entradaDados.question('Favor digite seu nome: ', function(nomeUsuario){
    console.log('O nome do usuario é: ' + nomeUsuario)

    //Entrada do valor1
    entradaDados.question('Favor digitar valor 1: ', function(valor1){

        //Entrada do valor2
        entradaDados.question('Favor digitar valor 2: ', function(valor2){

            //Entrada do valor3
            entradaDados.question('Favor digitar valor 3: ', function(valor3){
        
             //Realiza a soma dos valores
             var soma = Number(valor1) + Number(valor2) + Number(valor3)

               console.log ('A soma é: ' + soma)

             })
        
        })

    })

})