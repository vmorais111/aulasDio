function verifyAge(idade){
    if (idade<18){
        return 'menor de idade'
    }
    else{
        return 'maior de idade'
    }
}

(function(){
    console.log(verifyAge(23))
    console.log(verifyAge(15))
}())