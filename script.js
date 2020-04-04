function checar(){
  var data = new Date()
  var ano = data.getFullYear()
  var nas = document.getElementById('nascimento')
  var res = document.getElementById('resultado')
  if(nas.value.length == 0 || nas.value > ano){
    window.alert("erro, corrija e tente novamente")
  }
  else{
    var sex = document.getElementsByName('sex')
    var idade = ano - Number(nas.value)
    var gen = ''
    var img = document.createElement('img')
    if(sex[0].checked){
      gen = 'Masculino'
      if(idade < 18){
        img.setAttribute('src', 'jovem_m.jpg')
      }
      else if(idade < 60){
        img.setAttribute('src', 'adulto_m.jpg')
      }
      else{
        img.setAttribute('src', 'idoso_m.jpg')
      }
    }
    else if (sex[1].checked){
      gen = 'Feminino'
      if(idade < 18){
        img.setAttribute('src', 'jovem_f.jpg')
      }
      else if(idade < 60){
        img.setAttribute('src', 'adulta_f.jpg')
      }
      else{
        img.setAttribute('src', 'idoso_f.jpg')
      }
      
    }
    res.innerHTML = 'você tem ' + idade + ' anos, e é do genero ' + gen
    res.appendChild(img)
  }
}
