function parimp(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'ímpar'
    }
}
var res = parimp(10)
console.log(`O resultado é ${res}`)