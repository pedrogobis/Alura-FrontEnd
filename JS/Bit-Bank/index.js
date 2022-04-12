import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Ricardo", 11234566798);
const conta1 = new ContaCorrente(cliente1, 1001);

conta1.depositar(500);
conta1.sacar(300);

const ContaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);




const contaSal = new ContaSalario(cliente1);
contaSal.depositar(400);
contaSal.sacar(301)

console.log(contaSal);  
//console.log(conta)







//console.log(ContaPoupanca1);


//console.log(ContaPoupanca1);

/*
// como o cpf se tornou privado, o unico modo de definir dados nele é desse jeito, por isso dava erro, enquanto o nome pode ser definido de outras maneiras.
const cliente1 = new Cliente("Ricardo", 11234566798);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(700)
//console.log(contaCorrenteRicardo);



const cliente2 = new Cliente('Marta', 78934566798);

const conta2 = new ContaCorrente(1002, cliente2);


contaCorrenteRicardo.transferir(200,conta2);


const cliente3 = new Cliente("Fernando Pereira",32395877469);


const conta3 =  new ContaCorrente(1100, cliente3);


conta3.depositar(2300);

//console.log(conta3.saldo);

// como o numero da conta corrente é um numero que é estatico e que pertence a classe e não aos objetos, para acessar ele, voce coloca o nome da classe.
console.log(ContaCorrente.numeroDaConta);

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
