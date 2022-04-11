export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0; // precisei iniciar com 0 se não estava dando erro de indefinido
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

}