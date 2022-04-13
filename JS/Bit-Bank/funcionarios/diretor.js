import { Funcionario } from "./funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, cpf, salario){
        super(nome, cpf, salario)
        this._bonificacao = 1.1
    }
}