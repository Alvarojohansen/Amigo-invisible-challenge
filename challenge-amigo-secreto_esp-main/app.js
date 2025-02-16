// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
  const inputNombre = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos");
  const mensajeError = document.getElementById("mensajeError");
  const nombre = inputNombre.value.trim();

  // Restablecer estilos y mensajes
  inputNombre.classList.remove("input-error", "input-success");
  mensajeError.textContent = "";

  if (!nombre) {
    mensajeError.textContent = "⚠️ Por favor, ingresa un nombre válido.";
    inputNombre.classList.add("input-error");
    return;
  }

  if (amigos.includes(nombre)) {
    mensajeError.textContent = `⚠️ El amigo "${nombre}" ya está en la lista.`;
    inputNombre.classList.add("input-error");
    return;
  }
  amigos.push(nombre);

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;
  listaAmigos.appendChild(nuevoElemento);

  console.log(`Amigo agregado: ${nombre}`);

  inputNombre.classList.add("input-success");
  inputNombre.value = ""; // Limpiar input
  console.log(amigos);
};

const sortearAmigo =() =>{
    //Falta terminar parte de sorteo de amigo invisible
}