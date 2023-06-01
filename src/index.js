import cipher from './cipher.js';

document.getElementById("boton1").addEventListener("click", comenzarcipher)
function comenzarcipher() {

  document.getElementById("principal").style.display = "none";
  document.getElementById("pantalla2").style.display = "block";
}

document.getElementById("refresh").addEventListener("click", princ)
function princ() {
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    location.reload();
  })


}

document.getElementById("cifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  document.getElementById("mensaje2").value = cipher.encode(texto, desplazamiento);
}, true);
document.getElementById("descifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  document.getElementById("mensaje2").value = cipher.decode(texto, desplazamiento);
}, true);