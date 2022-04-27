// Variaveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');


new0.style.display = 'block'

// Criando indicador de slide atual.
var indicadorSlideAtual = document.createElement('span'); // vamos criar um elemento.
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = '(Slide atual)';



// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    //btn.href = 'javascript:void(0)' // removendo o deslocamento da tela.

    // Vamos automatizar o carrousel pra ficar mais pratico.
      noticias.forEach(function(news){ // cada item do array vai ser um news.// pensando em desempenho sempre declaramos uma variavel para um selectorall, pois se n ele vai procurar tudo dentro da pagina varias vezes, definindo uma variavel, ele não faz isso varias vezes.
      news.style.display = 'none'; // colocou display none dentro de todas as news
      
      if(this.getAttribute('data-sliderItem') === news.getAttribute('data-news') ){
        news.style.display ='block';
      }




    }.bind(this));
    // bind faz referencia ao this do botao e nao ao da noticia., meio que ele ignora o item atual e se responde a classe pai.


    /*remove dentro de listadeartigoslideitem qualquer um que tenha a classe esconde visualmente. otima forma pra não dar erro na hora de excluir uma classe no js.*/
    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})

