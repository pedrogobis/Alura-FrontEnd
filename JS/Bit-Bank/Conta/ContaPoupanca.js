import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{  
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); 
    }
    
    sacar(valor){
        let taxa = 1.02;
        // tanto faz usar o super ou o this nesse caso.
        return this._sacar(valor, taxa);
        
    }

}