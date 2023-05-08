
//#1- CRIAR AS VARIÁVEIS
var num = document.getElementById('fnun') //variável id
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = [] //valores em vetor 'array'
//---------------------------------------------------------------------

//#2- Confirmar se o número "n" está entre 1 e 100

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

//----------------------------------------------------------------------
// #3 - Confimar se 1 ou "n" estão na função "flista"

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}
//-------------------------------------------------------------------

// #4 - Validar o botão "adicionar:"

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //inserir valor NO FINAL
        var item = document.createElement('option') //item criado como "option"
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //apêndice filha dentro de flista = item
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() // como se um mouse estivesse sempre no "adicionar"
}
//--------------------------------------------------------------------------

// #5 - Validar os cálculos no botão finalizar

function Finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        var tot = valores.length // TOTAL 
        var maior = valores[0] // MAIOR VALOR
        var menor = valores[0] // MENOR VALOR
        var soma = 0 // A SOMA ENTRE OS VALORES
        var media = 0 // A MÉDIA DOS VALORES
        for(var pos in valores) { //FUNÇÃO "FOR" ABREVIADA
            soma += valores[pos]
            if(valores[pos] > maior ) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot // CÁLCULO DA MÉDIA
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O MAIOR valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando TODOS OS VALORES, o resultado é ${soma}.</p>`
        res.innerHTML += `<p>A MÉDIA de todos os valores é ${media}.</p>`
    }
}