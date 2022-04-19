//lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//funcao toca som
function tocaSom (seletorAudio) {
    // fracionando para seguranca
    const elemento = document.querySelector(seletorAudio);     
    // js já é inteligente então n tem necessidade de comparar o nulo, apenas deixar o elemento ali ele já vai fazer essa verificacao
    //se elemento existe, seja um valor e nao seja nda vaizio, entao cai como verdadeira
    if(elemento && elemento.localName === 'audio'){
        //elemento . localName serviu para verificar se o nome da tag era o mesmo do informado aqui
            elemento.play();

    }else{
            console.log('elemento nao encontrado')
        }

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
