let añadir = document.getElementById("añadir");
let restar = document.getElementById("restar");
let cero = document.getElementById("cero");
let numero = document.getElementById("numero");

function add() {
  let valor = parseInt(numero.textContent);
  numero.textContent = valor + 1;
  console.log(valor + 1);
  ocultar();
}

function reset() {
  numero.textContent = 0;
  ocultar();
}

function quitar() {
  let valor = parseInt(numero.textContent);
  numero.textContent = valor - 1;
  ocultar();
}

function ocultar() {
  let valor = parseInt(numero.textContent);

  if (valor === 0) {
    restar.classList.add("hidden");
  } else {
    restar.classList.remove("hidden");
  }
}

cero.addEventListener("click", reset);
restar.addEventListener("click", quitar);
añadir.addEventListener("click", add);
