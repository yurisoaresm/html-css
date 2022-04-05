function calculaArea() {
  let h2o = document.getElementById("out")
  let inR = document.getElementById("r")
  let raio = inR.value
  
  let area = 3.14 * raio ** 2
  
  h2o.innerHTML = `Área = ${area}`
}

