const lista= [5, 3, 4, 1, 10, 8];
let menorImpar=0;
for (let i = 0; i < lista.length; i++) {
    if (lista[i]%2===1 && menorImpar>lista[i]) {
        menorImpar=lista[i];
    }
}
console.log(menorImpar)