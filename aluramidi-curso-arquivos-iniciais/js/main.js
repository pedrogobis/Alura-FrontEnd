//lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//funcao toca som
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//laco for
for(let i =0; i < listaDeTeclas.length; i++) { 
    //para evitar codigo repetido, colocamos uma referencia, para n ficar duplicando.
    const tecla = listaDeTeclas[i];
    // assim como no console, ela esta acessando a lista de teclas, e acessando a classe lista, com o indice 1, então vai ser o segundo valor.
    const instrumento = tecla.classList[1];
    // ela criou o template, para preencher o resto do id, pois a classe do botão é tecla_somx e o id de cada som é som_tecla_somx, então desse jeito ela referenciou tudo
    const idAudio = `#som_${instrumento}`
    
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');            
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
