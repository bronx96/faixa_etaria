function checar(){
  var data = new Date()//pegar data do sevidor
  var ano = data.getFullYear()// pegar ano da data
  var nas = document.getElementById('nascimento')//pegar ano da caixa numerica
  var res = document.getElementById('resultado')// espaço para as respostas
  if(nas.value.length == 0 || nas.value > ano){//o ano digitado não pode ser maior que o atual
    window.alert("erro, corrija e tente novamente")
  }
  else{
    var sex = document.getElementsByName('sex')//pegar sexo escolhido
    var idade = ano - Number(nas.value)//calcular idade
    var gen = ''
    var img = document.createElement('img')//variavel que armazena a foto
    if(sex[0].checked){//Masculino
      gen = 'Masculino'
      if(idade < 18){//criança
        img.setAttribute('src', 'jovem_m.jpg')
      }
      else if(idade < 60){//adulto
        img.setAttribute('src', 'adulto_m.jpg')
      }
      else{//idoso
        img.setAttribute('src', 'idoso_m.jpg')
      }
    }
    else if (sex[1].checked){//feminino
      gen = 'Feminino'
      if(idade < 18){//criança
        img.setAttribute('src', 'jovem_f.jpg')
      }
      else if(idade < 60){//adulto
        img.setAttribute('src', 'adulta_f.jpg')
      }
      else{//idoso
        img.setAttribute('src', 'idoso_f.jpg')
      }
      
    }
    res.innerHTML = 'você tem ' + idade + ' anos, e é do genero ' + gen
    res.appendChild(img)//adicionar apendice filho
  }
}
