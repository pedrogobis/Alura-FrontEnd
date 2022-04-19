
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while(i < listaDeTeclas.length ){
    //para evitar codigo repetido, colocamos uma referencia, para n ficar duplicando.
    const tecla = listaDeTeclas[i];
    // assim como no console, ela esta acessando a lista de teclas, e acessando a classe lista, com o indice 1, então vai ser o segundo valor.
    const instrumento = tecla.classList[1];
    
    // ela criou o template, para preencher o resto do id, pois a classe do botão é tecla_somx e o id de cada som é som_tecla_somx, então desse jeito ela referenciou tudo
    const idAudio = `#som_${instrumento}`
    
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    i++
    
}
/*
btnPom.EventListener('click', () => {
    somPom.play()
})
*/