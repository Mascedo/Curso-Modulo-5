const prompt = require('prompt-sync')();
console.log(' --Esta é a calculadora CAUCULADA--')
let num1 = 0
let op = ''
let num2 = 0
numeros()
function numeros(){
num1 = Number(prompt("qual o primeiro numero da operação? "))
op = prompt("qual operação a fazer(use +,-,*,/,%):")
num2 = Number(prompt("qual o segundo numero da operação? "))
if(isNaN(num1)||isNaN(num2)){
    console.log("por favor, use numeros!")
    numeros()
}else{
    switch(op){       
    case '+':
        adicionar()
        break
    case '-':
        subtrair()
        break
    case '*':
        multiplicar()
        break
    case '/':
        dividir()
        break
    case '%':
        porcetagem()
        break
    default:
        console.log('simbolo de operação invalido!')
        numeros()
    }
}
}
function adicionar(){
    console.log('o resultado de '+ num1 + op + num2 + ' é ' + (num1+num2))
}
function subtrair(){
    console.log('o resultado de '+ num1 + op + num2 + ' é ' + (num1-num2))
}
function multiplicar(){
    console.log('o resultado de '+ num1 + op + num2 + ' é ' + (num1*num2))
}
function dividir(){
    console.log('o resultado de '+ num1 + op + num2 + ' é ' + (num1/num2))
}
function porcetagem(){
    console.log(num2 + '% de '+ num1 + ' é ' + (num1*(num2/100)))
}