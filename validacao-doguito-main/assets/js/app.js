import { valida } from './validacao.js'

//pegou todos os inputs
const inputs = document.querySelectorAll('input')

// aqui ele criou um for each, ou seja para cada input dentro de inputs, ele vai chamar o addeventilisnier no blur e chamar a funcao valida, tipo o que a agente tinha feito no arquivo anterior, porém de um jeito mais generico para poder ser utilizado mais vezes. 
inputs.forEach(input => {
    if(input.dataset.tipo === 'preco'){// vai fazer uma vericiacao s eo o input do dataset tipo é igual ao preco, se for chama o simple mask se nao vai para o eventlistnner que dae usa a funcao valida do validacao.
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'})// vai mover o cursor para o final
    }

    input.addEventListener('blur', (evento) =>{
        valida(evento.target)
    } )
} )
