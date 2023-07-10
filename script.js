function somar() {
  let altura = document.getElementById('altura');
  let peso = document.getElementById('peso');
  let res = document.getElementById('res');
  let classificacao = document.getElementById('classificacao')
  let classificacaoidoso = document.getElementById('classificacaoidoso')
  let radio = document.querySelector('input[name="idade"]:checked');
  let alturaIMC = Number(altura.value);
  let pesoIMC = Number(peso.value);
  let mult = alturaIMC * alturaIMC;
  let total = pesoIMC / mult;
  
  
  if (radio.value == '1') {
    res.innerHTML = 'Resultado' + '<br>' + 'Idoso ' + alturaIMC + ' m ' + pesoIMC + ' Kg ' + '<br>' + 'IMC = ' + total.toFixed(2);
  } else {
    res.innerHTML = 'Resultado' + '<br>' + 'Adulto ' + alturaIMC + ' m ' + pesoIMC + ' Kg ' + '<br>' + 'IMC = ' + total.toFixed(2);
  }

  if (total < 18.5 && radio.value == 0){
    classificacao.innerHTML = 'Baixo do peso'
  }else if (total >= 18.5 && total < 25 && radio.value == 0){
    classificacao.innerHTML = 'Peso normal'
  }else if(total >= 25 && total < 30 && radio.value == 0){
    classificacao.innerHTML = 'Excesso de Peso'
  }else if(total >= 30 && total < 35 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 1'
  }else if(total >= 35 && total < 40 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 2'
  }else if(total >= 40 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 3'
  }
  
  if (total < 22 && radio.value == 1){
    classificacaoidoso.innerHTML = 'Baixo do peso'
  }else if (total >= 22 && total < 27 && radio.value == 1){
    classificacaoidoso.innerHTML = 'Adequado ou eutrófico'
  }else if(total > 27 && radio.value == 1 ){
    classificacaoidoso.innerHTML = 'Sobrepeso'
  }
}


