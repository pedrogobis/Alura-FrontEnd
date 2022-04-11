import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// como o cpf se tornou privado, o unico modo de definir dados nele é desse jeito, por isso dava erro, enquanto o nome pode ser definido de outras maneiras.
const cliente1 = new Cliente("Ricardo", 11234566798);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(700)
console.log(contaCorrenteRicardo);



const cliente2 = new Cliente('Marta', 78934566798);

const conta2 = new ContaCorrente(1002, cliente2);


contaCorrenteRicardo.transferir(200,conta2);


const cliente3 = new Cliente("Fernando Pereira",32395877469);


const conta3 =  new ContaCorrente(1100, cliente3);


conta3.depositar(2300);

//console.log(conta3.saldo);

console.log(cliente2._cpf)

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
