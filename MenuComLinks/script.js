// IDENTIFICAR ELEMENTOS HTML
const menu = document.querySelector('.menu')
const vermelho = document.querySelector('#vermelho')
const verde = document.querySelector('#verde')
const azul = document.querySelector('#azul')
const amarelo = document.querySelector('#amarelo')
const box = document.querySelector('.box')
const texto = document.querySelector('#texto')
const normal = document.querySelector('#normal')

// MANIPULAR ESSES ELEMENTOS
vermelho.addEventListener('click', function() {
  box.style.backgroundColor = "#872c2c";
  texto.style.color = "black";
})
verde.addEventListener('click', function() {
  box.style.backgroundColor = "#49ca88";
  texto.style.color = "black";
})
azul.addEventListener('click', function() {
  box.style.backgroundColor = "#378fe6";
  texto.style.color = "black";
})
amarelo.addEventListener('click', function() {
  box.style.backgroundColor = "#f2e088";
  texto.style.color = "black";
}) 
normal.addEventListener('click', function() {
  box.style.backgroundColor = "#b8987c";
  texto.style.color = "black";
}) 
