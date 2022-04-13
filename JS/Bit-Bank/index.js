import {Cliente} from "./Cliente.js";
import { Funcionario } from "./funcionarios/funcionario.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// ctrl d pega a proxima referencia e seleciona também.

const diretor1 = new Diretor("Matheus", 32145698750, 3100);
// funcao de cadastrar senha está dentro de funcionario.js
diretor1.cadastrarSenha("54321")

const gerente1 = new Gerente("Marcos", 23444278932, 2900);
gerente1.cadastrarSenha("22313")

const cliente1 = new Cliente("Ricardinho", 13255671003, 54321);

//console.log(cliente1);

//sistema de autenticacao apenas verifica se a senha é igual a senha cadastrada.
const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "54321")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "22313");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "54321"); //estava dando erro pois no cliente não tem essa propriedade e eu estava tentando criar.

console.log(clienteEstaLogado);
//console.log(diretor1);
//console.log(gerente1);










/* aulas passadas 

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


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

*/





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
