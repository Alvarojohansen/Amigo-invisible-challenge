let amigos = [];
let amigosSorteados = new Set(); // Para rastrear los sorteados

const agregarAmigo = () => {
  const inputNombre = document.getElementById("amigo");

  const mensajeError = document.getElementById("mensajeError");
  const nombre = inputNombre.value.trim().toLowerCase(); // Normalizar texto

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
  actualizarLista();
  inputNombre.classList.add("input-success");
  inputNombre.value = ""; // Limpiar input
};

const eliminarAmigo = (nombre) => {
  amigos = amigos.filter((amigo) => amigo !== nombre);
  amigosSorteados.delete(nombre);
  actualizarLista();
};

const sortearAmigo = () => {
  const amigosDisponibles = amigos.filter(
    (amigo) => !amigosSorteados.has(amigo)
  );

  if (amigosDisponibles.length === 0) {
    document.getElementById(
      "resultado"
    ).innerHTML = `<li>⚠️ Ya se sortearon todos los amigos.</li>`;
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
  const amigoSorteado = amigosDisponibles[indiceAleatorio];

  amigosSorteados.add(amigoSorteado);

  const resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = `<li>🎉 Amigo sorteado: ${amigoSorteado}</li>`;
};

const actualizarLista = () => {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((nombre) => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.onclick = () => eliminarAmigo(nombre);

    nuevoElemento.appendChild(btnEliminar);
    listaAmigos.appendChild(nuevoElemento);
  });
};

// Inicializar la lista cuando se carga la página
document.addEventListener("DOMContentLoaded", actualizarLista);
