import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 1000)
    }
    sacar(valor){
        let taxa = 1.01;
        return super._sacar(valor, taxa);
        
    }

}