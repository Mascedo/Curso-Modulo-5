const prompt = require('prompt-sync')();


menu()
function menu(){
    console.log('---Gerenciador de consultas---')
    console.log('1.Adicionar consulta')
    console.log('2.Mostrar consulta')
    console.log('3.Atualizar consulta')
    console.log('4.Remover consulta')
    console.log('5.Sair')
    let escolha = Number(prompt('Digite o numero correspodente a ação:'))

switch(escolha){
    case 1:
        add()
        break;
    case 2:
        show()
        break;
    case 3:
        att()
        break;
    case 4:
        del()
        break;
    case 5:
        console.log('Obrigado por usar o gerenciador de consultas!')
        process.exit()
    default:
        console.log('---USE OS NUMEROS RESPECTIVOS---')
        menu()
}
}
