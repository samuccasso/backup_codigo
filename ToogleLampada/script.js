 // IDENTIFICAR OS ELEMENTOS DOM (ÁRVORE HTML)
const btnTrocar =
  document.getElementById('btn trocar')
const lampada =
  document.getElementById('lampada')
let baseURL = "https://0f03a18b-728b-47fd-b6a9-b76955b40a5c-00-7rcx4gjahdbi.janeway.replit.dev/"

btnTrocar.addEventListener('click', function() {
  // alert(lampada.src == baseURL + "lampada0.png")
  if (lampada.src == baseURL + "lampada0.png") {
    lampada.src ="lampada2.png"
    } else {
    lampada.src = "lampada0.png"
  }
})