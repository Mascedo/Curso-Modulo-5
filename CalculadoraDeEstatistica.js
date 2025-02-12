const prompt = require('prompt-sync')();
let opcao = 0
let lista = []
let quan = 0//é uma variavel geral porque tbm é usado na media
let media = 0// usado na media
let mediana = 0//usado na mediana
let meio = 0 //usado na mediana
let moda = 0
menu()//inicia o codigo
function menu(){
console.log('menu de opções:')
console.log('1.Adicionar nova lista')
console.log('2.Caucular media')
console.log('3.Caucula mediana')
console.log('4.Caucular moda')
console.log('5.Sair')
opcao = Number(prompt('oque deseja? '))
switch(opcao){
    case 1:
        add()
        break
    case 2:
        mediaN()// o N é porque existe uma variavel chamada media
        break
    case 3:
        medianaN()//mesmo motivo do de cima
        break
    case 4:
        modaN()
        break
    case 5:
        process.exit()
    default:
        console.log('-----Por favor, use numero para alguma ação!-----')
        menu()
}}

function add(){
    lista = []//limpa o array
    let cont = 0
    cont = 0//reseta a contagem
    quan = Number(prompt('quantidade de numeros na lista: '))//define a quantidade de numeros
    
while(cont<quan){
newnumber()//aciona o codigo
function newnumber(){
    let number = Number(prompt((cont+1) + 'º numero: '))
        
        if(isNaN(number)){//verificador 
            console.log('por favor use numeros!')
            newnumber()
        }else{
            lista.push(number)//adiciona na lista
            cont++
        }
    }
}
    console.log('esta é a lista:\n' + lista.toString())
    menu()
}

function mediaN(){
    var soma = 0
    soma = 0//reseta o valor da soma
    media = 0//reste o valor da media
    for (var semisoma of lista)//percorre todo array
    soma += semisoma//soma todos os valores do array percorrido na variavel soma
    media = soma/quan
    if(!(isNaN(media))){
        console.log('a media da lista é:\n' + media.toFixed(2))
    }else{
        console.log('nenhuma lista adicionada!')
    }
    menu()
}

function medianaN(){
    mediana = 0
    lista.sort((a, b) => a - b)
    meio = Math.floor(quan / 2)//o array começa com 0
    // Se o número de elementos for ímpar, retorna o valor central
    if (quan % 2 !== 0) {
        mediana = lista[meio]
    } 
    // Se for par, calcula a média dos dois valores centrais
    else {
        mediana = (lista[meio - 1] + lista[meio]) / 2
    }
    if(!(isNaN(mediana))){
        console.log('a mediana da lista é:\n' + mediana)
    }else{
        console.log('nenhuma lista adicionada!')
    }
    menu()
}
function modaN(){
    moda = 0
}