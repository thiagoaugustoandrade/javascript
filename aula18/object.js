let amigo = {nome:'José',
sexo:'M', 
peso:'85.4', 
engordar(p=0){
    console.log(`${amigo.nome} engordou!`)
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`)