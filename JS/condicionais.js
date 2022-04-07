console.log(`Trabalhando com Condicionais\n  `)

const listasDeDestinos = new Array(
    'salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);
//Variaveis do sistema:
const idadeComprador = 13;
const estaAcompanhada = false;
const temPassagemComprada = true;

/*
if (idadeComprador >= 18) {
    console.log(listasDeDestinos);
    console.log(`Comprador comprou ${listasDeDestinos[1]}`)
    listasDeDestinos.splice(1, 1);
    console.log('Destinos restantes:')
    console.log(listasDeDestinos);

} else if (estaAcompanhada === true) {
    console.log(`Comprador é menor de idade, mas está acompanhada de um responsavel.\nEntão pode efetuar a compra.\n  `);
    console.log(`Comprador comprou ${listasDeDestinos[1]}`)
    listasDeDestinos.splice(1, 1);
    console.log('Destinos restantes:')
    console.log(listasDeDestinos);
} else {
    console.log(`O comprador tem ${idadeComprador} e não tem acompanhante maior de idade`);
    console.log('Comprador é menor de idade.\nNão podemos vender infelizmente.');
}
*/

if (idadeComprador >= 18 || estaAcompanhada === true ) {
    console.log(listasDeDestinos);
    console.log(`Comprador comprou ${listasDeDestinos[1]}`)
    listasDeDestinos.splice(1, 1);
    console.log('Boa Viagem!')
    console.log('Destinos restantes:')
    console.log(listasDeDestinos);

}else {
    console.log(`O comprador tem ${idadeComprador} e não tem acompanhante maior de idade`);
    console.log('Comprador é menor de idade.\nNão podemos vender infelizmente.');
}

console.log('Embarque: \n \n')
if(idadeComprador > 18 && temPassagemComprada == true){
    console.log('Pode embarcar')
}else if(estaAcompanhada == true && temPassagemComprada == true){
    console.log('Pode embarcar')
}else{
    console.log('Infelizmente voce não pode embarcar')
}