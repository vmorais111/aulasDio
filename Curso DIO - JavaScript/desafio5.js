let valor = 56.99
let pagamentoModo = 'Parcelado'
let detalhePagam = 2

console.log('Modo de pagamento: ' + pagamentoModo)

if (pagamentoModo === 'à vista'){
    if(detalhePagam==='Débito'){
        let x = (valor*0.1) - valor
        console.log('Forma de pagamento: ' + detalhePagam)
        console.log('Valor final: ' + x)
    }
    else if (detalhePagam === "PIX" || detalhePagam === 'Dinheiro'){
        let x = (valor*0.15) - valor
        console.log('Forma de pagamento: ' + detalhePagam)
        console.log('Valor final: '+ x)
    }
} else if(pagamentoModo === 'Parcelado'){
    if (detalhePagam === 2){
        console.log('Forma de pagamento: Parcelado em ' + detalhePagam + ' vezes')
        console.log('Valor final: ' + valor)
    }
    else if (detalhePagam>2){
        console.log('Forma de pagamento: Parcelado em ' + detalhePagam + ' vezes')
        let x = (valor*0.1) + valor
        console.log('Valor final: ' + x)
    }
}