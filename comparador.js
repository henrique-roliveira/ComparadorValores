do{
alert('Bem vindo ao comparador de valores!')
alert('')

var gasPrice = prompt('Qual o preço da gasolina?')
parseFloat(gasPrice)
alert('')

var ethaPrice = prompt('Qual o preço do ethanol?')
parseFloat(ethaPrice);
alert('')

alert( "Gasolina: R$" + gasPrice.replace('.',',') + ' Ethanol: R$'+ ethaPrice.replace('.',','))
alert(' ')

if(gasPrice * 0.7 < ethaPrice){
  var resultado = ethaPrice - gasPrice * 0.7
  alert('A gasolina está mais em conta por: R$ '+ resultado.toFixed(2).replace('.',','))
}
if(gasPrice * 0.7 > ethaPrice){
  var resultado = gasPrice * 0.7 - ethaPrice
  alert('O Ethanol está mais em conta por: R$ '+ resultado.toFixed(2).replace('.',','))
}
if(gasPrice * 0.7 == ethaPrice){
  alert('Não exite diferença entre os preços')
}
alert(' ')
var fim = prompt('Deseja fazer outra consulta?(1 para sim ou 2 para não)')
}while (fim == 1)
if(fim == 2){
  alert('Obrigado pela atenção!')
}
