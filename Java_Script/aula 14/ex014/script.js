function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12){
        //BOM DIA
        img.src = 'fotodamanha.png'
        document.body.style.background = '#85835d'
        msg2.innerHTML = '<p><strong>BOM DIA ☀️ </strong> </p>'
    }else if (hora > 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fotodatarde.png'
        document.body.style.background = '#fd9e41'
        msg2.innerHTML = '<p><strong>BOA TARDE 🌆 </strong> </p>'
    }else {
        //BOA NOITE
        img.src = 'fotodanoite.png'
        document.body.style.background = '#1d4160'
        msg2.innerHTML = '<p><strong>BOA NOITE 🌃  </strong> </p>'
    }



}

