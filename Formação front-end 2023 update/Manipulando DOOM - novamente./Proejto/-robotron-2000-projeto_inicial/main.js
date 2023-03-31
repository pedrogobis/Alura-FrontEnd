/*
Deixamos nosso codigo dinamico fazendo uso do queryselector all e fazendo um for each para separar e pegar elementos de cada atributo
desse modo ficou tudo mais dinamico, sem precisar criar uma variavel para cada item, apenas deixando dinamico com a ajuda do proprio doom que oferece
o objeto e seus parametros.

css: está acoplado aos nosso js, então se houver mudanças nele nosso codigo quebra, então vamos melhorar isso.
para isso vamos modificar o html e colocar a propridade em cada elemento de DATA-NOME="VALORQUEQUEREMOS", Assim será dinamico
e aqui no js - buscamos a informação usando [data-nome] 

E para deixar melhor ainda, podemos deixar mais dinamico, usando dentro do foreach o target como dataset.valorquequeremos]
vamos fazer isso no segundo parametro da função também, já que nela está sendo inserido o dado manipulado. 
## no data-x não precisamos colocar um valor se não queremos, podemos deixar ele solto.


#### data não precisa necessariamente de atributo
e também não precisa comecar com data. apenas o nome dela já pode ser pego pelos colchetes
*/
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")




const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}




controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        console.log(evento.target.dataset.controle, evento.target.parentNode)
        manipuladados(evento.target.dataset.controle,evento.target.parentNode)
        atualizaestatisticas(evento.target.dataset.peca)
    });
});

function manipuladados(operacao, controle){
    let partecorpo = controle.querySelector("[data-contador]")
    //console.log(partecorpo.value) corrigi o problema, nome errado do data-set
    
    if(operacao === '-'){
        partecorpo.value = parseInt(partecorpo.value) -1
    }else{
        partecorpo.value = parseInt(partecorpo.value) +1
    }
    
}

function atualizaestatisticas(peca){ // estou passando a peça que eu clickei
    //console.log(pecas[peca])// dentro do peças esta procurando a peça que clickei
    estatisticas.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) +pecas[peca][elemento.dataset.estatistica]
        console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)
    })
}


