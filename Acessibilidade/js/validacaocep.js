const campoCep = document.querySelector('#cep');

campoCep.oninvalid = function(){
    this.setCustomValidity('') ;
    if(!this.validity.valid){
        this.setCustomValidity("Ops! Tem alguma coisa errado ai ein, verifica ai seu nóia!")
        this.parentNode.classList.add('contatoCampo--erro')
    }
}