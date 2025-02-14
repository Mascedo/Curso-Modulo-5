const prompt = require('prompt-sync')();
let consultas = []
let id = 0
menu()
function menu(){
    console.log('---Gerenciador de consultas---')
    console.log('1.Adicionar consulta')
    console.log('2.Mostrar consultas')
    console.log('3.Atualizar consulta')
    console.log('4.Remover consulta')
    console.log('5.Sair')
    let escolha = Number(prompt('Digite o numero correspodente a ação: '))

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



function add(){
    let paciente = prompt('Nome do paciente: ')
    let medico = prompt('Nome do Dr: ')
    let data = prompt('Data da consulta(AAAA/MM/DD): ')
    let horario = prompt('Horario da consulta(XX:XX): ')
    id++
    console.log('ID: '+id)
    consultas.push({id, paciente, medico, data, horario})
    menu()
}



function show(){
    let s = 0
    s = 0
    consultas.forEach(element => {
        console.log('----------------------------')
        console.log('Nome: '+ consultas[s].paciente)
        console.log('Medico: '+ consultas[s].medico)
        console.log('Data: '+ consultas[s].data)
        console.log('Horario: '+ consultas[s].horario)
        console.log('ID: '+ consultas[s].id)
        s++
    });
    menu()
}



function att(){
        let guess = Number(prompt('ID da consulta a para atualizar: '))
        let achou = consultas.find(user => user.id == guess)
        if(achou){
            want()
        }else{
            console.log('ID de consulta não existente')
            menu()
        }
        function want(){
            console.log('\nUse p=paciente, m=medico, d=data e h=horario')
            let quer = prompt('oque deseja atualizar?')
            switch(quer){
                case 'p':
                    achou.paciente = prompt('Novo paciente:')
                    menu()
                    break;
                case 'm':
                    achou.medico = prompt('Novo medico:')
                    menu()
                    break;
                case 'd':
                    achou.data = prompt('Nova data:')
                    menu()
                    break;
                case 'h':
                    achou.horario = prompt('Novo horario:')
                    menu()
                    break;
                default:
                    console.log('Por favor use as letras indicadas')
                    want()
            }
        }
}


function del(){
    let idRemoção = Number(prompt('ID da consulta a ser removida: '))
    let confirmação = consultas.find(user => user.id == idRemoção)
    if(confirmação){
    consultas = consultas.filter(consulta => consulta.id !== idRemoção)//vai somente deixar os que forem diferente do idRemoção
    console.log('Consulta removida')
    }else{
        console.log('ID de consulta não existente')
        menu()
    }
    menu()
}