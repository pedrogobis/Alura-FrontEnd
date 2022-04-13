import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDaConta = 0; // definimos a palavra static, para que independente do objeto, esse item mude para cada uma
    
    // alteramos a ordem do cliente e agencia para padronizar com a classe mae
    constructor(cliente, agencia) {
        // super signifca que estamos chamando o construtor de cima e dando esses parametros para ele, o 0 é padrão para complementar o construtor, dps o cliente e agencia mesmo nome para receberem como parametro no pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDaConta +=1;
    }

    // sobre escrevendo o metodo/comportamento sacar
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
        
    }
    
}
    /*
    agencia;
    _cliente;
    _saldo = 0; // precisei iniciar com 0 se não estava dando erro de indefinido

    // o set vai obrigar que o valor do cliente seja uma instancia de cliente, então só pode ser atribuido esse valor, e não qualquer coisa, por exemplo não posso apenas atribuir um numero, ou um nome, apenas uma instancia da classe cliente.
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    // agora podemos pegar apenas os dados do cliente, mesmo estando privada.
    get cliente(){
        return this._cliente;
    }

   


    // o interessante do get é que ele apenas visualiza, e não atribui, bom para no caso de você apenas querer ver o valor, tipo em um app da conta de banco, voce quer ver seu saldo e nao manipulalo, então usamos o get
    get saldo(){
        return this._saldo;
    }

    //seguir a ordem.
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDaConta ++;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; // se n tiver o return ele sempre vai retornar undefinied, ele também serve como um break, alem de retornar dados.
        }else{
            console.log('valor insuficiente para sacar.')
        }
    }



    depositar(valor){
        // vamos fazer outro tipo de verificaçao para melhorar a leitura, no caso vamos deixar tudo que eu não quero dentro do if, e o que eu quero fora (else)
        // esta tecnica se chama eary return
        // se for uma verificação simples onde não vai ter mais ifs dentro ficaria assim:
        // if (valor <= 0 ) return;
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    // mais uma funcao e nela vai entrar um valor e o numero da conta, dentro dela vai ter uma variavel que vai pegar a funcao sacar desta conta, colocar o valor inserido, e vai depositar na conta que foi inserido no parametro, e inserir o valor sacado nela.
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
    */

