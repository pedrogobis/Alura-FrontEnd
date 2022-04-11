import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11234566798;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(700)
console.log(contaCorrenteRicardo);



const cliente2 = new Cliente();
cliente2.nome = 'Marta';
cliente2.cpf = 78934566798;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteRicardo.transferir(200,conta2);


const cliente3 = new Cliente();
cliente3.nome = "Fernando Pereira";
cliente3.cpf = 32395877469;


const conta3 =  new ContaCorrente();
conta3.agencia = 1100;
conta3.cliente = cliente3;

conta3.depositar(2300);

console.log(conta3.saldo);


/* como agora defini como privado o cliente não da pra fazer mais assim, precisamos criar uma variavel.
// criando uma conta de um jeito diferente
const conta3 =  new ContaCorrente();
conta3.cliente = new Cliente();
// como conta corrente tem o campo cliente, desse jeito estamos acessando a conta 3 e no campo cliente, estamos criando um novo cliente
// e desse modo estamos definindo que dentro de conta3, e dentro do cliente vamos colocar o nome fernando e o cpf 
conta3.cliente.nome = "Fernando";
conta3.cliente.cpf = 32395877469;
conta3.agencia = 1003;

console.log(conta2);
console.log(conta3);
*/


/*
console.log(conta2);

contaCorrenteRicardo.transferir(200,conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
*/
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
