let nota1 = 8.9
let nota2 = 9.0
let nota3 = 7.8
const media =(nota1+nota2+nota3)/3

console.log(media)
if(media<5){
    console.log('reprovado')
} else if (media>5 && media<7){
    console.log('recuperação')
} else {
    console.log('aprovado')
}
