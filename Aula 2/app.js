/********************************************************* 
 * Objetivo: Calcular medias escolares
 * Data: 29/01/2026
 * Autor: Henrique Alves
 * Versão: 1.0
**********************************************************/

/*
    Existem 3 formas de criação de variaveis

    var -> Permite a criação de um espaço na memoria 
            do tipo variavel. Foi ultilizado muito
            em projetos antigos.
            Recomendação: Caso você queira ultiliazar,
            recomenda-se ultilizar em variaveis globais.
            (Inicio de código)

    let -> Permite a criação de um espaço na memoria 
            do tipo variavel. A ultiliazação desse padrão é
            para a criação dentro de blocos de programação { }.
            Essa variavel nasce e morre dentro deste bloco.
            Não é recomendado a sua ultilizar em escopo globais.

    const -> Permite a criação de um espaço na memoria
        onde não sofrera alterações durante a execução do código. A const
        pode ser utilizadada dentro e fora de bloco {}.
        Dica: Cao você queira diferenciar uma const, um var ou um let.
        A const você pode criar com letras MAIUSCULAS. 


*/

//Import da biblioteca
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno
    let nomeAluno = nome 

    //Recebe a nota 1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //Recebe a nota 2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //Recebe a nota 3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                //Recebe a nota 4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    /*
                        Operadores de comparação

                        == -> Permite comparar a igauldade de duas variaveis
                        < -> Permite comparar valores menores
                        > -> Permite comparar valores maiores
                        >= -> Permite comparar valores maiores ou iguais
                        <= -> Permite comparar valores menores ou iguais
                        != -> Permite comparar a diferença entre conteudos
                        === -> Permite comparar o a igualdade de conteudos 
                                e a tipagem de dados
                        !== -> Permite comparar a diferença de conteudos e a
                                igualdade de tipos de dados
                        ==! -> Permite comparar a igualdade de conteudos e a 
                                diferença de tipos de dados
                        !=! -> Permite comparar a diferença de conteudos e a,
                                diferença de tipos de dados

                        Operadores lógicos
                            E -> AND -> &&
                            OU -> OR -> ||
                            NÃO -> NOT -> !        
                    
                    */

                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados!!!')

                    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
                        console.log('ERRO: As notas devem estar entre 0 e 100!')

                    }



                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
})//Fecha o nome