// Variáveis
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var controleVideo = document.querySelector('video');
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');// esse é a transparencia do fundo do site.

btnAbreDialog.style.display = 'block'

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true; // tirando o foco da pagina.
  controleVideo.removeAttribute('controls');
  
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto'); 
  conteudoForaDialog.inert = false; //voltando o foco para pagina
  btnAbreDialog.focus();
  controleVideo.setAttribute('controls', true);// setatribute adiciona
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);


document.addEventListener('keyup', function(evento){
  if(evento.keyCode == 27){// codigo do esq
    fechandoDialog();

  }
});