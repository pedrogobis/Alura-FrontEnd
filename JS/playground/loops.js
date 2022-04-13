console.log(`Trabalhando com Condicionais\n  `)

const listasDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);
//Variaveis do sistema:
const idadeComprador = 31;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`\nDestinos Possiveis:`);
console.log(listasDeDestinos);

// está falando que pode comprar se um desses dois itens for verdadeiro, está jogando essa verificacao dentro de uma variavel, ao invez de usar o if
const podeComprar = idadeComprador >= 18 || estaAcompanhada === true

let contador = 0;
let destinoExiste = false;

while(contador < 4){
    // está rodando um if, que está verificando se há o destino que a pessoa quer, se não estiver ele n printa nada, vai passar a lista inteira e vai procurar pelo destino da pessoa 
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break; 
    }
    contador ++;
}

console.log("Destino Existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe tivemos um erro!")
}

// for sempre começa com 3 parametros, inciar a variavel, o enquanto e depois o incremento 
for(let contad = 0; contad < 4; contad++){
    // está rodando um if, que está verificando se há o destino que a pessoa quer, se não estiver ele n printa nada, vai passar a lista inteira e vai procurar pelo destino da pessoa 
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break; 
    }
   
}