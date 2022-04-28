import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao (new Date, 10, 392); // new date vai pegar a data atual e colocar dentro.
console.log(negociacao);

//negociacao.quantidade = 1000; // adicionou uma nova propriedade dinamicamente, mas não alterou a classe quantidade privada.
console.log(negociacao.volume);
