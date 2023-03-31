const tintas = document.querySelector('[data-tintas]');
const lista = document.querySelector('.lista');

var clique = true;

tintas.addEventListener('click', (evento) => {

if (clique == true) {
lista.style.visibility = "hidden";
clique = false;
}else{
lista.style.visibility = "visible";
clique = true}

})

// mais uma vez um desafio totalmente mal escrito pela alura.