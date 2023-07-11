function somar() {
  let altura = document.getElementById('altura');
  let peso = document.getElementById('peso');
  let res = document.getElementById('res');
  let classificacao = document.getElementById('classificacao')
  let classificacaoidoso = document.getElementById('classificacaoidoso')
  let radio = document.querySelector('input[name="idade"]:checked');
  let alturaIMC = Number(altura.value);
  let pesoIMC = Number(peso.value);
  let maxpeso = 25 * (altura.value * altura.value)
  let minpeso = 18.5 * (altura.value * altura.value)
  let mult = alturaIMC * alturaIMC;
  let total = pesoIMC / mult;
  
  
  if (radio.value == '1') {
    res.innerHTML = 'Resultado' + '<br>' + 'Idoso ' + alturaIMC + ' m ' + pesoIMC + ' Kg ' + '<br>' + 'IMC = ' + total.toFixed(2);
  } else {
    res.innerHTML = 'Resultado' + '<br>' + 'Adulto ' + alturaIMC + ' m ' + pesoIMC + ' Kg ' + '<br>' + 'IMC = ' + total.toFixed(2);
  }

  if (total < 18.5 && radio.value == 0){
    classificacao.innerHTML = 'Baixo do peso' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if (total >= 18.5 && total < 25 && radio.value == 0){
    classificacao.innerHTML = 'Peso normal' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if(total >= 25 && total < 30 && radio.value == 0){
    classificacao.innerHTML = 'Excesso de Peso' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if(total >= 30 && total < 35 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 1' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if(total >= 35 && total < 40 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 2' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if(total >= 40 && radio.value == 0){
    classificacao.innerHTML = 'Obesidade de Classe 3' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }
  
  if (total < 22 && radio.value == 1){
    classificacaoidoso.innerHTML = 'Baixo do peso' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if (total >= 22 && total < 27 && radio.value == 1){
    classificacaoidoso.innerHTML = 'Adequado ou eutrófico' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }else if(total > 27 && radio.value == 1 ){
    classificacaoidoso.innerHTML = 'Sobrepeso' + '<br>' + 'Peso Ideal: '+ '<br>'+ 'Peso minimo: ' + minpeso.toFixed(2) + ' Kg'  + '<br>'+ 'peso maximo: '+ maxpeso.toFixed(2) + ' Kg' 
  }
}


