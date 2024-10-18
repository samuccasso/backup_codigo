// Atividades funções Javacript
// 1) Função soma(n1,n2)
// 2) Função soma(n1,n2) com checagem IF/ELSE
// 3) Função nomeAltura(nome,altura) com checagem IF/ELSE
// 4) Função numeroParOuImppar(n1)

function soma(n1, n2) {
  return n1 + n2; 
}
function soma(n1, n2) {
  if (n1 > 0 && n2 > 0) { 
    return n1 + n2;
  } else {
    return "Erro: Os números devem ser positivos.";
  }
}
function nomeAltura (nome, altura) {
  if (altura > 2) {
    return nome + ", você é muito alto!";
  } else {
    return nome + ", você é baixinho!";
  }
}
function numeroParOuImmpar(n1) {
  if (n1 % 2 === 0) {
    return n1 + " é par";
  } else {
    return n1 + " é ímpar";
  }
}
console.log(soma(5, 3)); // Imprime 8
console.log(soma(-1, 5)); // Imprime "Erro: Os números devem ser positivos."
console.log(nomeAltura("Mussyr", 2.99)); // Imprime "Mussyr, você é baixinho!"
console.log(numeroParOuImmpar(7)); // Imprime "7 é ímpar"