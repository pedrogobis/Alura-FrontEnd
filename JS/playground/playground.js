//verificando

const vegetais = new Array(
    'abobora',
    'cebola',
    'pepino',
    'cenoura'
)

vegetais.push('tomate');

console.log(vegetais)

vegetais.splice(2,1)

console.log(vegetais);


const numeros = new Array(
    
);

let contador = 0; 

while( contador <= 15){ // estava dando errado porque tinha colocado a tabela, para fazer daquele jeito teria que ter usado o for.
    numeros.push(contador)
    console.log(numeros)
    contador++
}