function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 18){
                // adolescente
                img.setAttribute('src', 'homem-adol.png')
            }else if (idade > 18 && idade < 40){
                // jovem adulto
                img.setAttribute('src', 'homem-30.png')
            }else if (idade > 40 && idade < 50){
                //adulto
                img.setAttribute('src', 'homem-40.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if (idade < 18){
                // adolescente
                img.setAttribute('src', 'mulher-adol.png')
            }else if (idade > 18 && idade < 40){
                // jovem adulto
                img.setAttribute('src','mulher-30.png')
            }else if (idade > 40 && idade < 50){
                //adulto
                img.setAttribute('src', 'mulher-40.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}