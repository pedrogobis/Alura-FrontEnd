const btnMenu = window.document.querySelector('.cabecalho__menu');
const navMenu = document.querySelector('.menu-lateral');


// ele usou o addeventlistnier para chamar a funcao no botao, e criou um arrow function para chamar a funcao. 
btnMenu.addEventListener('click', () => {
    //classlist acessa a classe, o toggle se nao tem adiciona se n tem remove.
    navMenu.classList.toggle('menu-lateral--ativo')
})


