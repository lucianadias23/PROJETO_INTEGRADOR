let tamanhoFonteAtual = 18;

function aplicarTamanhoFonte() {
  document.body.style.fontSize = `${tamanhoFonteAtual}px`;
}

function aumentarFonte() {
  if (tamanhoFonteAtual < 26) {
    tamanhoFonteAtual += 2;
    aplicarTamanhoFonte();
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 14) {
    tamanhoFonteAtual -= 2;
    aplicarTamanhoFonte();
  }
}
