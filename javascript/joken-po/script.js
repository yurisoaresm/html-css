let pScore = 0
let iaScore = 0

function play (pChoice) {
  let iaChoice = Math.floor(Math.random() * 3) + 1
  let winner
  
  if ((iaChoice == 1 && pChoice == 3) || (iaChoice == 2 && pChoice == 1) || (iaChoice == 3 && pChoice == 2)) {
    winner = "IA"
    iaScore++
  } else if (pChoice == iaChoice) {
    winner = "NO ONE"
  } else {
    winner = "PLAYER"
    pScore++
  }
  
  let result = document.getElementById("resultado")
  let score = document.getElementById("placar")
  
  result.innerHTML = `${winner} WINS!`
  score.innerHTML = `PLAYER : ${pScore} X ${iaScore} : IA`
}