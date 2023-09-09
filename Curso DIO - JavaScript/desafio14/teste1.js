// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./auxiliar1');

let media = gets();

function avaliaçãoMedia(media){
    if (media<5){
        return 'reprovado'
    } else if (media>=5 && media<7){
        return 'recuperação'
    } else if (media>=7){
        return 'aprovado'
    }
}

print(avaliaçãoMedia(media))