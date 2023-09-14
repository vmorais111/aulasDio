// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./auxiliar2');

let valores=gets();
let listaNumeros = [0];
for (let i = 0; i < valores; i++) {
    let número=gets();
    listaNumeros.push(número);    
}
listaNumeros[0]=valores;

function par(lista){
    maiorPar = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]%2===0 && maiorPar<lista[i]){
            maiorPar=lista[i];
        }
    }
    return maiorPar
}

function impar(lista){
    let menorImpar=Infinity;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]%2===1 && menorImpar>lista[i]) {
            menorImpar=lista[i];
        }
    }
    return menorImpar
}
print(listaNumeros)
print(par(listaNumeros))
print(impar(listaNumeros))
