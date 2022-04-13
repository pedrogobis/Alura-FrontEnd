console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// const curitiba = `Curitiba`;

const distinosPossiveis = new Array(
    'salvador',
    'Sao Paulo',
    'Rio De Janeiro',
    'Curitiba'
)

console.log(distinosPossiveis);


distinosPossiveis.splice(2,1);
console.log(distinosPossiveis);

console.log(distinosPossiveis[2]);