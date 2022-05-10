async function converter() {
  let quantia = document.getElementById("quantia").value; // obter o atributo value do objeto input com ID "quantia"
  let mIn = document.querySelector('input[name="in"]:checked').value;
  let mOut = document.querySelector('input[name="out"]:checked').value;
  // https://exchangeratesapi.io/
  let url = "https://api.exchangerate.host/convert?from="+mIn+"&to="+mOut;

  let response = await fetch(url);
  let data = await response.json();

  let valorConvertido = quantia * data.info.rate;

  document.getElementById("result").innerHTML = valorConvertido.toFixed(2);
    
}