function sayMyName(name){
    if (name==='Heisenberg'){
        return 'You are goddamn right!'
    }
    else{
        return 'Seu nome é:' + name
    }
}

(function(){
console.log(sayMyName('Heisenberg'))
console.log(sayMyName('Joselito'))
}())