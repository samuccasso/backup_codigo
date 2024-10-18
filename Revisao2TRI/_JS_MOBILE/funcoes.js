/**
* FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
* FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
* FUNÇOES PODEM RETORNAR VALORES OU NÃO
* FUNÇÕES PODEM SER ANÔNIMAS
*/
// DECLARAÇÃO DE FUNÇÃO
function dizOla () {
  alert('Olá')
}
function olaPessoa (nome) {
  alert('Olá, ' + nome)
}
const nome = 'Jojo'
const sobrenome = 'Todynho'
const idade = 99

function dadosPessoa(){
  const dados = nome + sobrenome + idade
  console.log(dados)
}
// INVOCAÇÃO DE FUNÇÃO
dizOla()
olaPessoa('Jooj Tody')
dadosPessoa()