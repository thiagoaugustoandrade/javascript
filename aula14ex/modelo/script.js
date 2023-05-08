function carregar(){
    var msg = document.getElementById('msg') 
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //para carregar a hora em tempo real
    //var hora = 9 (teste)
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#c1dedf'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#e7ed89'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#092526'
    }
    
}


