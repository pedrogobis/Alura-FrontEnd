/*
Ser autenticavel significa ter o metodo autenticar"

Para maior segurança, pensando em evitar vazamentos de senhas, vamos criar o metodo autenticar dentro do cliente/funcionario, para não ter chances de invasoes, assim esse sistema de verificacao não vai ter acesso a vizualizar a senha.

Ducky type é normal em linguagens com tipagem fraca, provavelmente o python também
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehautenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
        } return `Não é possivel autenticar ${autenticavel}`;
    }
    static ehautenticavel(autenticavel){
        // aqui ele usou o for in  e o instanceof = instancias são funcoes dentro da classe. 
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}