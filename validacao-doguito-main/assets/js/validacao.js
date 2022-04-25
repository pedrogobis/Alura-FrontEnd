export function valida(input){
    // estamos declarando uma variavel que vai receber o dataatributes que criamos no html, veja que no dataset, colocamos ponto. tipo, que é o que colocamos la no html
    const tipoDeInput = input.dataset.tipo
    if(validadores [tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        //parentElement para selecionar o pai do elemento, no caso aqui será a div 
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML=''

    }else{
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML= mostraMensagemDeErro(tipoDeInput, input)

    }
}
//vamos criar um objeto que vai receber todas as mensagens de erros costumizaveis:
// vamos ter que criar um dataatribute para todos os itens no input do html, para poder pega-los aqui e expecificar
const  mensagensDeErro = {
     // para verificar os itens do validity que estamos usando, abrimos o console e digitamos '$0.validity'
     nome: {
         valueMissing: 'O campo nome, Não pode estar vazio.'
     },
     email: {
        valueMissing: 'O campo E-mail, Não pode estar vazio.',
        typeMismatch: 'O E-mail digitado não é valido.'
     },
     senha: {
        valueMissing: 'O campo da senha, Não pode estar vazio.',
        patternMismatch: 'A senha deve conter de 6 a 8 digitos, sem espaços, uma letra maiuscula, um digito e algum simbulo'
     },
     dataNascimento:{
        valueMissing: 'O campo da data de nascimento, Não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar'
     },
     cpf: {
        valueMissing: 'O campo de CPF, Não pode estar vazio.',
        customError: 'CPF digitado não é valido'
     },
     cep:{
         valueMissing: 'O campo de CEP não pode estar vazio.',
         patternMismatch: 'O CEP digitado não é valido',
        customError: 'Não foi possivel encontrar o cep',
     },
     logradouro:{
        valueMissing: 'O campo do logradouro não pode estar vazio.',
     },
     cidade:{
        valueMissing: 'O campo da cidade não pode estar vazio.',
     },
     estado:{
        valueMissing: 'O campo do estado não pode estar vazio.',
     }

}
// vetor com cada tipo de erro.
const tiposDeErro = [
    'valueMissing', 
    'typeMismatch',
    'patternMismatch',
    'customError'
]

/* criamos um objeto que vai conter cada tipo de dados dentro do dataatributes, no caso
 aqui quando tiver um tipo dataNascimento, o input vai
 chamar o validaDataNascimento, com o valor do input.*/
const validadores = {
     dataNascimento: input => validaDataNascimento(input),
     cpf: input => validaCPF(input),
     cep: input => recuperarCEP(input)
}
/*
Refatorando o codigo, faremos uma funcao para usar todos os dados de maneira generica.
no html usaremos o dataatributes


const dataNascimento = document.querySelector('#nascimento')
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})
*/
 /* essa funcao vai pegar os parametros tipo de erro e input, para cada item em tipos de erro, se input validatiy erro inserido vai mudar a mesnagem de erro com o tipo de input e erro.*/
function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

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

function validaCPF(input){
    //vamos usar uma regex, ela vai pegar tudo que não for um digito e vamos trocar por
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''
     //com o ! ele inverte o vdd pra falso e falso pra verdadeiro. e bate a logica
    if(!checaCPFRepetido(cpfFormatado)|| !checaEstruturaCPF(cpfFormatado) ){
        mensagem = ' O CPF digitado não é valido'
    }

    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf){
    const valoresRepetidos =[
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
       ]
       let cpfValido = true

       valoresRepetidos.forEach(valor =>{
           if(valor == cpf){
               cpfValido = false;
           }
       })

       return cpfValido
}

function checaEstruturaCPF(cpf){
    const multiplicador = 10
    return checaDigitoVerificador(cpf, multiplicador)

}

function checaDigitoVerificador(cpf, multiplicador){
    if(multiplicador >=12  ){
        return true
    }
    // para n alterar o valor real do multiplicador
    let multiplicadorInicial = multiplicador
    let soma = 0 // sei la
    const cpfSemDigitos = cpf.substr(0,multiplicador-1).split('') // corta a string da posicao 0 a posicao multiplicador -1 e retonra um vetor separado por espaço, cada chave do vetor (10* 1)
    const digitoVerificador = cpf.charAt(multiplicador-1)// charAt posicao especifica 
    for(let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--){
        soma = soma + cpfSemDigitos[contador] * multiplicador
        contador++
    }
    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1 )
    }
    return false
}

function confirmaDigito(soma){
    return 11 - ( soma % 11)
}


/*

Vamos verificar o cpf se é valido fazendo a conta
o calculo de cpf valido é o seguinte:

ex 123 456 789 01

-- para verficar o primeiro digito verificador
a soma vai funcionar assim =
(10* 1) + (9 *2) + (8*3) +... (2*9)

o digito verficador é igual a 11-(soma % 11) // é o resto da soma divido por 11 menos 11
-- para verificar o segundo numero
a multiplicacao começa por 11
(11*1) + (10*2) + .... (3*9)

o segundo digito verficador é igual a 11-(soma % 11)
*/

function recuperarCEP(input){
    const cep = input.value.replace(/\D/g, '') // tratou o cep, e tirou quaisquer coisas que não fosse um digito numerico.
    const url = `https://viacep.com.br/ws/${cep}/json/` // link da api
    const options = { // objeto que vai ser enviado para api, metodo pegar, cors api, headers
        method: 'GET', 
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }
    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro){
                    input.setCustomValidity('Não foi possivel encontrar o cep')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCep(data)
                return // mata o fatch
            }
        )
    }

}

function preencheCamposComCep(data){
    const logradouro = document.querySelector('[data-tipo="logradouro"]') // procurar por atributos, usamos o colchetes
    const cidade = document.querySelector('[data-tipo="cidade"]') // procurar por atributos, usamos o colchetes
    const estado = document.querySelector('[data-tipo="estado"]') // procurar por atributos, usamos o colchetes
    
    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf
}