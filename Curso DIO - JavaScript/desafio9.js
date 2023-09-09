// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class carros{
    marca;
    cor;
    gastoMédio;

    constructor (marca, cor, gastoMédio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMédio = gastoMédio;
    }

    calcularPrecoComb(distViagem,valorComb){
        return (distViagem*this.gastoMédio*valorComb)
    }

}


let carnovo1 = new carros('Fiat Uno','Amarelo',1/12)
console.log(carnovo1.calcularPrecoComb(120,5.50))