function verificar(){
  var data = new Date ()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano){ /* Validação Aniversário */
    window.alert('[ERRO] Verifique os dados tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex') /* Pegando Dados do Radio Button */
    var idade = ano - Number(fano.value) /* Calculando idade */
    var gênero = ''
    var img = document.createElement('img') /* Criando Elemento Imagem <img> */
    img.setAttribute('id','foto') /* Atribuindo um ID a imagem */
    if (fsex[0].checked){ /* Se o primeiro [0] radiobutton estiver checado */
      gênero = 'masculino'
      if(idade >= 0 && idade < 10){
        res.innerHTML = `Detectamos bebê ${gênero} com ${idade} anos.` 
        img.setAttribute('src', 'images/bebe-m.jpg')
      } else if (idade < 21){
        res.innerHTML = `Detectamos jovem ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/jovem-m.jpg')
      } else if(idade < 50){
        res.innerHTML = `Detectamos adulto ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/adulto-m.jpg')
      } else {
        res.innerHTML = `Detectamos idoso ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/idoso-m.jpg')
      }
    } else if(fsex[1].checked){/* Se o segundo [0] radiobutton estiver checado */
      gênero = 'feminina'
      if(idade >= 0 && idade < 10){
        res.innerHTML = `Detectamos bebê ${gênero} com ${idade} anos.` 
        img.setAttribute('src', 'images/bebe-f.jpg')
      } else if (idade < 21){
        res.innerHTML = `Detectamos jovem ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/jovem-f.jpg')
      } else if(idade < 50){
        res.innerHTML = `Detectamos adulto ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/adulto-f.jpg')
      } else {
        res.innerHTML = `Detectamos idoso ${gênero} com ${idade} anos.`
        img.setAttribute('src', 'images/idosa-f.jpg')
      }
    }
    res.style.textAlign = 'center' /* alinhando texto ao centro */ 
    res.appendChild(img)
/*     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`  
 */  }

}