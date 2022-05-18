init();

function init() {
  document.getElementById("name").addEventListener("keyup", save); // forma recomendada de add evento; executa função save() quando o usuário soltar tecla
  document.getElementById("text").addEventListener("keyup", save);
}

function save() {
  let nome = document.getElementById("name").value;
  let texto = document.getElementById("text").value;

  localStorage.setItem("user", nome);
  localStorage.setItem("content", texto);
}

function load() {
  if("user" in localStorage) {
    document.getElementById("name").value = localStorage.getItem("user");
  }
  if("content" in localStorage) {
    document.getElementById("text").value = localStorage.getItem("content");
  }
}

function clean() {
  localStorage.clear();
  document.getElementById("text").value = "";
  document.getElementById("name").value = "";
  
}
