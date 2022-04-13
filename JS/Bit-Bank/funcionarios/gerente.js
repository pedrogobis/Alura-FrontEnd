import { Funcionario } from "./funcionario.js"

export class Gerente extends Funcionario{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario)
        this._bonificacao = 2;
    }
}