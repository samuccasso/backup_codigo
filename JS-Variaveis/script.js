// LOCALIZAR ELEMENTOS DO HTML
// CRIAR: EMAIL / TELEFONE / IDADE / SEXO
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');


// CRIAR VARIÁVEIS
const novoNome = "Emília"
const novoSobrenome = "Kubica Ramos"
const novoEmail = "socorro@gmail.com"
const novoTelefone = "41 0800 984 02"
const novaIdade = "42"
const novoSexo = "Masculino"


// ATRIBUIR VALORES DO HTML COM OS VALORES
// DAS NOSSAS VARIÁVEIS (innerText/innerHTML)
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo
