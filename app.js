// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se deja el array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Se crea la función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    input.value = ''; // esto limpia el campo de entrada cuando se agrega un nuevo nombre
}

// Se crea la función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpia la lista antes de actualizarla

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('data-index', index);
        ul.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('La lista de amigos está vacía.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSeleccionado}</li>`;

    ;

    // Oculta la lista de amigos
    document.getElementById('listaAmigos').style.display = 'none'
}