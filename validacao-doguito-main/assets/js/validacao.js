export function valida(input){
    // estamos declarando uma variavel que vai receber o dataatributes que criamos no html, veja que no dataset, colocamos ponto. tipo, que é o que colocamos la no html
    const tipoDeInput = input.dataset.tipo
    if(validadores [tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        //parentElement para selecionar o pai do elemento, no caso aqui será a div 
        input.parentElement.classList.remove('input-container--invalido')

    }else{
        input.parentElement.classList.add('input-container--invalido')
    }
}
// criamos um objeto que vai conter cada tipo de dados dentro do dataatributes, no caso aqui quando tiver um tipo dataNascimento, o input vai chamar o validaDataNascimento, com o valor do input.
const validadores = {
     dataNascimento: input => validaDataNascimento(input)
}
/*
Refatorando o codigo, faremos uma funcao para usar todos os dados de maneira generica.
no html usaremos o dataatributes


const dataNascimento = document.querySelector('#nascimento')
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})
*/

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar';
    };
    //Criamos uma mensagem personalizada de erro, o setcustomvalidity, é o texto que vai aparecer so esteja errado, caso esteja certo, n vai aparecer nda
    input.setCustomValidity(mensagem);
}

function maiorQue18(data){
    const dataatual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate ());

    return dataMais18 <= dataatual;
}