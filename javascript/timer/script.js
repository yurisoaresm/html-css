let buttonStart
let buttonPause
let buttonReset
let divTempo
let tempo = 0
let timerId

// main function
init()

function init() {
  buttonStart = document.getElementById("start")
  buttonStart.onclick = start
  
  buttonPause = document.getElementById("pause")
  buttonPause.onclick = pause
  buttonPause.disabled = true
  
  buttonReset = document.getElementById("reset")
  buttonReset.onclick = reset
  buttonReset.disabled = true
  
  divTempo = document.getElementById("tempo")
}

function update() {
  tempo += 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start() {
  buttonStart.disabled = true
  buttonPause.disabled = false
  buttonReset.disabled = false

  timerId = setInterval(update, 100)
  
}

function pause() {
  clearInterval(timerId)

  buttonStart.disabled = false
  buttonPause.disabled = true
}

function reset() {
  clearInterval(timerId)
  tempo = 0
  divTempo.innerHTML = "0.0s"
  buttonStart.disabled = false
  buttonPause.disabled = true
  buttonReset.disabled = true
  
}