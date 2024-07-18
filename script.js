function verificar(){

var data = new Date()
ano = data.getFullYear()
var nome = window.document.getElementById("txtnome")
var txnome = String(nome)
ano_nasci = window.document.getElementById("ano_nasc")
idade = ano - Number(ano_nasci.value)
var resp = window.document.getElementById("resp")
var genero = ''
var foto = window.document.getElementById("foto")
var direct = ''


if (idade < 0 || ano_nasci.value > ano || ano_nasci.value.length == 0){
    window.alert("[ERRO] VERIFIQUE OS DADOS INFORMADOS E TENTE NOVAMENTE...")
}

else {
    var tsex = window.document.getElementsByName("tsex")

if (tsex[0].checked){
    var genero = "homem"
    var direct = 'um'

    if (idade >= 0 && idade <= 3){
        resp.innerHTML = `<img id="foto" src="imagens/homem-bebe.png" alt="">`
    }
    else if (idade > 3 && idade <= 11 ){
        resp.innerHTML = `<img id="foto" src="imagens/homem-crianca.png" alt="">`
    }

    else if (idade >= 12 && idade <= 17){
        resp.innerHTML = `<img id="foto" src="imagens/homem-adolescente2.png" alt="">`
    }
    else if (idade >= 17 && idade <= 25){
        resp.innerHTML = `<img id="foto" src="imagens/homem-jovem2.png" alt="">`
    }
    else if (idade > 25 && idade <= 45){
        resp.innerHTML = `<img id="foto" src="imagens/homem-adulto2.png" alt="">` 
    }

    else if (idade > 45 && idade <= 60){
        resp.innerHTML = `<img id="foto" src="imagens/homem--de-meiaidade2.png" alt="">`
    }

    else if (idade > 60){
        resp.innerHTML = `<img id="foto" src="imagens/homem-idoso2.png" alt="">`
    } 
    }
    
    else if (tsex[1].checked){
        var genero = "mulher"
        var direct = 'uma'

        if (idade >= 0 && idade <= 3){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-bebe2.png" alt="">`
        }
        else if (idade > 3 && idade <= 11){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-crianca.png" alt="">`
        }
        else if (idade >= 12 && idade <= 17){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-adolescente2.png" alt="">`
        }
        else if (idade >= 17 && idade <= 25){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-jovem2.png" alt="">`
        }
        else if (idade > 25 && idade <= 45){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-adulta2.png" alt="">` 
        }

        else if (idade > 45 && idade <= 60){
            resp.innerHTML = `<img id="foto" src="imagens/mulhermeiaidade.png" alt="">`
        }

        else if (idade > 60){
            resp.innerHTML = `<img id="foto" src="imagens/mulher-idosa2.png" alt="">`
        }

}





resp.innerHTML += `<p>Foi verificado ${direct} ${genero} com ${idade} anos de idade. </p>`

}

}