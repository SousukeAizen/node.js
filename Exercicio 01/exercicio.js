// Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline');

// Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do usuário
entradaDeDados.question('Favor digitar o seu nome: ', function(nomeUsuario){
    console.log('O nome do usuário é: ' + nomeUsuario);

    // Pergunta os números para somar
    entradaDeDados.question('Digite dois números separados por espaço: ', function(valores){
        var numeros = valores.split(' ');

        // Converte para número
        var num1 = Number(numeros[0]);
        var num2 = Number(numeros[1]);

        // Faz a soma
        var resultado = num1 + num2;

        console.log(`A soma de ${num1} + ${num2} é: ${resultado}`);
    });
});