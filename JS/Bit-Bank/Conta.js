export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        // aqui vai ter a taxa, e só iremos alterar esse metodo na classe filho
        let taxa = 1;
        // vai retornar o metodo privado
        return this._sacar(valor, taxa)

    }
    // deixamos o sacar privado para melhorar a segurança e evitar repeticao de codigos nas classes filhos. 
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }else{
            return 'valor para sacar insuficiente'
        }
    }
    

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}