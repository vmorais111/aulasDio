function tabuada(numero){
    let listaTabuada=[]
    for (let i = 0; i <= 10; i++) {
        let bn = numero*i;
        listaTabuada.push(bn)
    }
    return listaTabuada
}

console.log(tabuada(5))

