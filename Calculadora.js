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
        console.log(`resultado:${num1}+${num2}=` + adicionar(num1,num2))
        break
    case '-':
        console.log(`resultado:${num1}-${num2}=` + subtrair(num1,num2))
        break
    case '*':
        console.log(`resultado:${num1}*${num2}=` + multiplicar(num1,num2))
        break
    case '/':
        console.log(`resultado:${num1}/${num2}=` + dividir(num1,num2))
        break
    case '%':
        console.log(`${20}% de ${num1}=` + porcetagem(num1,num2))
        break
    default:
        console.log('simbolo de operação invalido!')
        numeros()
    }
}
}
function adicionar(x,y){
    return x+y
}
function subtrair(x,y){
    return x-y
}
function multiplicar(x,y){
    return x*y
}
function dividir(x,y){
    return x/y
}
function porcetagem(x,y){
    return x*(y/100)
}