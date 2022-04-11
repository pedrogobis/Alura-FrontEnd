import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "Ricardo";
cliente1.cpf = 11234566798;

cliente2.nome = 'Marta';
cliente2.cpf = 78934566798;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(700)
console.log(contaCorrenteRicardo);





const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

console.log(conta2);

contaCorrenteRicardo.transferir(200,conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);

/*
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 1000;
contaCorrenteRicardo.depositar(30000)
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(3000);
*/
/*
console.log(cliente1);
console.log(cliente2);

*/
