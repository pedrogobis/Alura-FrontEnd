const dataNascimento = document.querySelector('#nascimento')
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

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