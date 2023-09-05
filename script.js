// Variavel da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset =document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnTry.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterClick)

// função callback
function handleTryClick(e) {
  e.preventDefault() // não envie o formulario
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()     
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
  } else if (Number(inputValue) < 0 || Number(inputValue) > 10){
    alert('Digite um número entre 0 e 10')
  } else if (inputValue.length == "" || !(Number(inputValue))){
    alert('Erro. Digite um número válido')
} 
  document.querySelector('input').value = ""  
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterClick(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
  

