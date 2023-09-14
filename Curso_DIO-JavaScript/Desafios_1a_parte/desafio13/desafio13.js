
const { gets, print } = require('./auxiliar');

let listaAlunos=gets();
let maiorNumero=0;

for (let i = 0; i < listaAlunos.length; i++) {
    const numeroDaVez = listaAlunos[i];
    if (numeroDaVez>maiorNumero){
        maiorNumero=numeroDaVez;
    }
}
print(maiorNumero)