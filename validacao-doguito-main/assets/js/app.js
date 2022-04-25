import { valida } from './validacao.js'

//pegou todos os inputs
const inputs = document.querySelectorAll('input')

// aqui ele criou um for each, ou seja para cada input dentro de inputs, ele vai chamar o addeventilisnier no blur e chamar a funcao valida, tipo o que a agente tinha feito no arquivo anterior, porém de um jeito mais generico para poder ser utilizado mais vezes. 
inputs.forEach(input => {
    input.addEventListener('blur', (evento) =>{
        valida(evento.target)
    } )
} )
