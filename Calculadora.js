const prompt = require('prompt-sync')();
console.log(' --Esta é a calculadora CAUCULADA--')
numeros()
function numeros(){
let num1 = Number(prompt("qual o primeiro numero da operação? "))
let op = prompt("qual operação a fazer(use +,-,*,/,%):")
let num2 = Number(prompt("qual o segundo numero da operação? "))
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