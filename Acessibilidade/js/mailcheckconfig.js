var meuEmail = document.querySelector('#email');
var sugestao =  document.querySelector('#sugestao');
var domains = ['gmail.com', 'aol.com','outlook.com', 'outlook.com.br'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org",'br'];



meuEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: meuEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function(suggestion) {
          sugestao.style.display = 'inline-block';
          sugestao.textContent = 'voce quis dizer: '+ suggestion.full+ '?'
          sugestao.parentNode.classList.add('contatoCampo--erro');
          meuEmail.classList.add('contatoCampo--validouErro')
          sugestao.setAttribute('tabindex', '0');

        }
        
      });
});