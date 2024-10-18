// IF / ELSE -> ESTRUTURA CONDICIONAL PARA TOMADA DE DECISÃO

const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
else if (idade < 18) {
  console.log("Menor de idade");
}
else {
  console.log("Idade inválida");
}
// REFATORAÇÃO: Refazer com melhorias
//IF, IF para IF / ELSE IF

// CASE SENSITIVE - Maiúsculas diferem de minúsculas

/**
* PROMPT ("DAKDJFAKD")
* escreva um código que pergunte qual a cor preferida. Se for vermelho, imprima "Você é um vermelho", se for azul, imprima "Você é um azul"
* SENÃO não conheço essa cor
*/
  //const cor = "azul-turquesa";
  const cor = prompt("Qual a sua cor favorita");

  if (cor === "vermelho") {
    console.log("Você é um vermelho");
  } 
  else if (cor === "azul") {
    console.log("Você é um azul");
  } 
  else {
    console.log("Não conheço essa cor");
  }

console.log(cor.length) // COMPRIMENTO DA STRING