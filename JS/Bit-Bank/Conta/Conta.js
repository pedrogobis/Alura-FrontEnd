// Classe abstrata = só serve para ser herdada, praticamente um molde padrão para as outras.
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente!, pois esa é uma classe abstrata.")
        }
        
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

    //metodo abstratro, toda classe terá que re escrever ele.
    sacar(valor){
        // por algum motivo meu erro não funcionou, mas fiz igual o da aula.
        throw new Error("O método Sacar da conta é abstrato")
        // aqui vai ter a taxa, e só iremos alterar esse metodo na classe filho
        //let taxa = 1;
        // vai retornar o metodo privado
        //return this._sacar(valor, taxa)

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