criamos
var target = '11a22b33c';
undefined
var exp = new RegExp('(\\d\\d)(\w)', 'g');
undefined
exp.test(target);
false
metodo melhor
var exp1 = /(\d\d)(\w)/g;
undefined
exp1.test(target);

true
exp1.exec(target)
(3) ['22b', '22', 'b', index: 3, input: '11a22b33c', groups: undefined]
exp1.test(target);

true
exp1.exec(target)
null
exp1.exec(target)
(3) ['11a', '11', 'a', index: 0, input: '11a22b33c', groups: undefined]
exp1.exec(target)
(3) ['22b', '22', 'b', index: 3, input: '11a22b33c', groups: undefined]
exp1.exec(target)
(3) ['33c', '33', 'c', index: 6, input: '11a22b33c', groups: undefined]
var anoMesDia = '2007-12-31';
undefined
trocando o hifen por barra
var hifen = /-/ g;
VM818:1 Uncaught SyntaxError: Unexpected identifier
var hifen = /-/ g
VM824:1 Uncaught SyntaxError: Unexpected identifier
var ifen = /-/ g
VM842:1 Uncaught SyntaxError: Unexpected identifier
var ifen = /-/g
undefined
anoMesDia = anoMesDia.replace(ifen, '/');
'2007/12/31'

== o g no final significa global, se n tivesse sido declarado no hifen ele ia pegar apenas o primeiro hifen
var arquivo = '100,200-1340,200;300';
undefined
var valores = arquivo.split(',');
undefined
valores
(3) ['100', '200-1340', '200;300']
/ splitando com essa regex.
var dividirEm =/[,;-]/;
undefined
var valores = arquivo.split(dividirEm);
undefined
valores
(5) ['100', '200', '1340', '200', '300']


 -- usando o match
var codigos = 'A121B12112C12212F12G01';
undefined
-- criamos o regex
var codigosSepara = /[A-Za-z]\d+/g;
undefined
--usando o regex
var codigoExtraido = codigos.match(codigosSepara)
undefined
codigoExtraido
(5) ['A121', 'B12112', 'C12212', 'F12', 'G01']

---
Regex pode ser usado no input do formulario para verificar os dados.