export class Cliente{
    
    
    // acessar o cpf que é privado
    get cpf(){
        return this._cpf; // já estava funcionando sem o return, deve ser pela diferença entre versões da aula para a atual.
    }

    // agora com o construtor, podemos colocar os dados do cliente como parametro no new cliente, muito mais pratico.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf
    }
}