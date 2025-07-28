function atualizarCotacao() {
  const cotacaoAtual = 5.56; // valor fixo da semana, como mostrado na imagem
  document.getElementById("cotacao").value = cotacaoAtual.toFixed(2);
  alert("Cotação atualizada: R$ " + cotacaoAtual.toFixed(2).replace(".", ","));
}

function converter() {
  const cotacao = parseFloat(document.getElementById("cotacao").value);
  const valor = parseFloat(document.getElementById("valorDolar").value);

  if (isNaN(cotacao) || isNaN(valor)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const resultado = cotacao * valor;
  document.getElementById("resultado").textContent =
    "Valor em reais: R$ " + resultado.toFixed(2).replace(".", ",");
}
