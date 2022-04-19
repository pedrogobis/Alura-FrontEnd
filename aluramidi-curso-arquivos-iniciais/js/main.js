
function tocaSom(idElementoAudio){
    document.querySelectorAll(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while(i < listaDeTeclas.length ){
    listaDeTeclas[i].onclick = tocaSom;
    i++

}
/*
btnPom.EventListener('click', () => {
    somPom.play()
})
*/