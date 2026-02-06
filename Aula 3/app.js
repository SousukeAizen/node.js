//Importando a biblioteca readline
const readline = require('readline')

//Cria interface de entrada e saída de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function(nome){

    //Nome do cliente
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(produto){

        //Nome do produto
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function(valor){
            //Valor da compra
            let valorCompra = valor

            entradaDeDados.question('Insira a taxa de juros: ', function(juros){
                //taxa de juros
                let taxaJuros = juros

                entradaDeDados.question('Digite o tempo de pagamento: ', function(tempo){
                    entradaDeDados.question('O tempo está em meses ou anos? (m/a): ', function(tipo){

                        //Converte entrada em número
                        let tempoFinal = Number(tempo)
                        
                        //Se for em anos, multiplica por 12 para converter em meses
                        if(tipo.toLowerCase() === 'a'){
                            tempoFinal = tempoFinal * 12
                        }

                        //Valida se todos os campos foram preenchidos
                        if(nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || tempo == '' || tipo == ''){
                            console.log('ERRO: É obrigatório o preenchimento de todos os dados!')
                        
                        //Valida se os valores numéricos são válidos
                        } else if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(Number(tempo))){
                            console.log('ERRO: Valores inválidos!')
                        }else{
                            //Calcula o montante com juros compostos
                            let resultado = Number(valorCompra) * Math.pow((1 + Number(taxaJuros) / 100), tempoFinal)
                            //Calcula o acréscimo de juros
                            let acrescimo = resultado - Number(valorCompra)
                        
                            //Exibe a nota fiscal 
                            console.log(`********************** Viva Moda **********************`)
                            console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}`)
                            console.log(`A compra do produto ${nomeProduto}, tem um valor de: R$ ${Number(valorCompra).toFixed(2)}`)
                            console.log(`A sua compra será parcelada em ${tempoFinal} vezes e o Sr(a) pagará: R$ ${resultado.toFixed(2)}`)
                            console.log(`O acréscimo realizado ao valor de: R$ ${Number(valorCompra).toFixed(2)} será de R$ ${acrescimo.toFixed(2)}`)
                            console.log(`\nMuito obrigado por escolher a [Viva Moda].`)
                            console.log(`*************************************************************`)
                        }
                    })//Fecha o tipo
                })//Fecha o tempo

            })//Fecha os juros

        })//Fecha o valor
    })//Fecha o produto
})//Fecha o nome