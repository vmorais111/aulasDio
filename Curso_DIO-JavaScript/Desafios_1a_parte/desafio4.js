let peso = 85;
let altura = 1.75;
let IMC = (peso/ Math.pow(altura,2))
console.log(IMC.toFixed(2))

if (IMC<18.5){
    console.log("abaixo do peso")
} else if(18.5<=IMC && IMC<25){
    console.log("peso normal")
} else if(25<=IMC && IMC<30){
    console.log("Acima do peso")
} else if (30<=IMC && IMC<40){
    console.log('Obesidade')
} else {
    console.log('Obesidade grave')
}
