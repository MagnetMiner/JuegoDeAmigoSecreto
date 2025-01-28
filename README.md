# JuegoDeAmigoSecreto
Es un proyecto para el curso de Oracle y Alura Latam - Grupo 8

Este proyecto tiene como objetivo desarrollar una aplicación que permita a los usuarios agregar nombres de amigos a una lista, mostrarlos en una página web y seleccionar aleatoriamente a un amigo secreto.

## Instalación

No se requieren instalaciones especiales para este proyecto. Simplemente clona este repositorio y abre el archivo `index.html` en tu navegador.

```bash
git clone https://github.com/MagnetMiner/JuegoDeAmigoSecreto.git

Variables
1.	let listaDeAmigos = [];
o	Se declara un array vacío llamado listaDeAmigos que almacenará los nombres de los amigos.
Funciones
1.	function agregarAmigo()
o	Esta función se encarga de agregar un nuevo amigo a la lista.
o	Variables dentro de la función:
	input: Obtiene el elemento del DOM con el ID 'amigo'.
	nombre: Obtiene el valor del input y elimina espacios en blanco al inicio y final con trim().
o	Lógica de la función:
	Si nombre está vacío, muestra una alerta pidiendo al usuario que ingrese un nombre.
	Si nombre ya está en listaDeAmigos, muestra una alerta diciendo que el nombre ya está en la lista.
	Si el nombre es válido y no está repetido, se agrega a listaDeAmigos, se actualiza la lista en el DOM llamando a actualizarLista(), y se limpia el campo de entrada.
2.	function actualizarLista()
o	Esta función actualiza la lista de amigos en el DOM.
o	Variables dentro de la función:
	ul: Obtiene el elemento del DOM con el ID 'listaAmigos'.
o	Lógica de la función:
	Limpia el contenido del elemento ul antes de actualizarlo.
	Recorre cada amigo en listaDeAmigos, crea un nuevo elemento li para cada amigo, establece el texto del li como el nombre del amigo, y añade el li a ul.
3.	function sortearAmigo()
o	Esta función selecciona aleatoriamente un amigo secreto de la lista.
o	Variables dentro de la función:
	indiceAleatorio: Genera un número aleatorio que representa un índice del array listaDeAmigos.
	amigoSeleccionado: Obtiene el nombre del amigo en el índice aleatorio.
	resultado: Obtiene el elemento del DOM con el ID 'resultado'.
o	Lógica de la función:
	Si la lista de amigos está vacía, muestra una alerta indicando que no hay amigos en la lista.
	Si hay amigos en la lista, selecciona un amigo aleatoriamente y muestra el nombre en el DOM.
	Oculta la lista de amigos en el DOM.

