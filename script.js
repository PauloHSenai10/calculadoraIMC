const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

function calcularIMC() {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);

  if (isNaN(pesoValue) || isNaN(alturaValue)) {
    resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  const imc = pesoValue / (alturaValue * alturaValue);
  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
}

function classificacaoIMC() {
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);

  const imc = pesoValue / (alturaValue * alturaValue);

  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade classe I";
  } else if (imc < 40) {
    classificacao = "Obesidade classe II";
  } else {
    classificacao = "Obesidade classe III";
  }
  
  document.getElementById("classificacao").textContent = classificacao;
}