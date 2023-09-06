const valorGasolina = 5.30;
const valorAlcool = 3.45;
let carroComb = 'álcool';
let rendCarro = 12;
let distViagem = 120;
let combEscolhido;

if (carroComb==='gasolina'){
    combEscolhido = valorGasolina
} else if (carroComb==='álcool'){
    combEscolhido = valorAlcool
} else{
    console.log('Combustível não reconhecido, favor colocar gasolina ou álcool')
}

let calc = ((distViagem/rendCarro)*combEscolhido)
console.log(calc)