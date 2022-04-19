//fez uma lista de botoes
const listaBotao =  document.querySelectorAll('input[type=button]');
//selecionou o input que ia mostrar os valores (o visor do telefone.)
const inputTel =  document.querySelector('input[type=tel]');


for(let i = 0; i < listaBotao.length; i++){
  // criamos uma referencia a lista do botao com o numero do indice
  const botao = listaBotao[i]
    // funcao anonima, que pega o visor, e recebe no campo valor o valor que ele tem mais o botao como valor
  botao.onclick = function (){
      // aqui é o seguinte, para manter o valor anterior temos que colocar o inputTel.value, e concatenar com novo valor, que é o botao.value, e o que nao foi comentado é que o botao value é o mesmo valor que o indice dele no html, então por isso bateu.
    inputTel.value= inputTel.value + botao.value;
  }
  botao.onkeydown = function(evento){
    if(evento.code === "Enter" || evento.code === "Space"){
    botao.classList.add('ativa');
    }
  }
  botao.onkeyup = function(){
    botao.classList.remove('ativa');
  }
}

