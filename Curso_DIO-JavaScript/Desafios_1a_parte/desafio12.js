function numeroParListas(numero){
    let listaPares=[]
    for (let i = 0; i < numero.length; i++) {
        let z= numero[i]
        if(z%2===0){
            listaPares.push(z);
        }
    }
    return listaPares
}

function numeroParSolto(numero){
    let listaPares=[]
    for (let i = 0; i < numero; i++) {
        if(i%2===0){
            listaPares.push(i);
        }
    }
    return listaPares
}

let bn = [12,23,44,55,68]

console.log(numeroParListas(bn))
console.log(numeroParSolto(100))