function pagamento(modoPagamento,valorProduto){
    if (modoPagamento==1){
        console.log('Débito')
        return valorProduto - (valorProduto*0.1)
    } else if (modoPagamento===2){
        console.log('Pix ou dinheiro')
        return valorProduto - (valorProduto*0.15)
    } else if (modoPagamento===3){
        console.log('Parcelado em 2 vezes')
        return valorProduto
    } else{
        console.log('Parcelado em + de 2 vezes')
        return valorProduto + (valorProduto*0.1)
    }
}

(function(){
    console.log(pagamento(4,100))
}())