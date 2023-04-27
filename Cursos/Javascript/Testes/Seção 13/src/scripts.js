console.log("Aula 226 - Testando uma expressão regular");


console.log(/testando/.test("asdnklataknltestanodlkase"));
console.log(/testando/.test("asdnklataknltestandolkase"));
console.log(/testando/.test("asdnklataknltedlkase"));
console.log(/testando/.test("tttteeeeesssssstttttaaando"));

//ou

let reg1=new RegExp("testando");
let reg2=/testando/;
console.log(reg1.test("asdnklataknltestanodlkase"));
console.log(reg1.test("asdnklataknltestandolkase"));
console.log(reg2.test("asdnklataknltedlkase"));
console.log(reg2.test("tttteeeeesssssstttttaaando"));
console.log("akdadfadfdafdfalj");



console.log("\n\nAula 227 - Conjuntos");

console.log(/[123]/.test("Existe 123 aqui"));

let teste=/[0-9]/;
console.log(teste.test("existe5 ")); 



console.log("\n\nAula 228 - Caracteres especiais");
/**
 * \d - Qualquer dígito de caractere
 * \w - Um caractere alfanumérico("teste")
 * \s - Qualquer caractere de espaço em branco
 * \D - Caracteres quenão são dígitos
 * \W - Caractere não-alfanumérico
 * \S - Caractere que não seja espaço em branco
 *  . - Qualquer caractere, menos nova linha
 */

const pontoRegex = /./;

console.log(pontoRegex.test("adfjkça"));
console.log(pontoRegex.test("2342"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("\n"));
console.log(pontoRegex.test("fdslakj123"));
console.log("\n\n");

const dRegex = /\d/;

console.log(dRegex.test("adfjkça"));
console.log(dRegex.test("2342"));
console.log(dRegex.test(" "));
console.log(dRegex.test("\n"));
console.log(dRegex.test("fdslakj123"));
console.log("\n\n");

const dRegex2 = /\D/;

console.log(dRegex2.test("adfjkça"));
console.log(dRegex2.test("2342"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("\n"));
console.log(dRegex2.test("fdslakj123"));
console.log("\n\n");

const sRegex = /\s/;

console.log(sRegex.test("adfjkça"));
console.log(sRegex.test("2342"));
console.log(sRegex.test(" "));
console.log(sRegex.test("\n"));
console.log(sRegex.test("fdslakj123"));
console.log("\n\n");

const wRegex = /\w/;

console.log(wRegex.test("adfjkça"));
console.log(wRegex.test("2342"));
console.log(wRegex.test(" "));
console.log(wRegex.test("\n"));
console.log(wRegex.test("fdslakj123"));
console.log("\n\n");



console.log("\n\nAula 229 - Aplicações de regex com caracteres especiais");
const dia=/\d\d/;

console.log(dia.test("2019"));
console.log(dia.test("fadf"));
console.log(dia.test("04"));
console.log(dia.test("as12"));
//solução:

console.log("\n\n");
let stringAno = "2019"
let stringDia = "27"
console.log(dia.test(stringAno)&&stringAno.length==2);
console.log(dia.test(stringDia)&&stringDia.length==2);

console.log("\n\n");

const palavraPeloMenos3Letras = /\w\w\w/;

console.log(palavraPeloMenos3Letras.test("adksfa"));
console.log(palavraPeloMenos3Letras.test("jjj"));
console.log(palavraPeloMenos3Letras.test("as"));



console.log("\n\nAula 230 - operador Not ^");

const palavrasSem123 = /[^123]/;
console.log(palavrasSem123.test("1203900"));
console.log(palavrasSem123.test("123"));
console.log(palavrasSem123.test("adskfa"));
console.log(palavrasSem123.test("1234"));

const notAtoZ = /[^a-z]/;
console.log("\n\n");
console.log(notAtoZ.test("asdfkjlas"));
console.log(notAtoZ.test("ADKDAFDKL"));
console.log(notAtoZ.test("128034"));



console.log("\n\nAula 231 - Operador plus +");
const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("123134"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("dsaf"));



console.log("\n\nAula 232 - Operador \"opcional\" ");

const padrao1 = /Abacax?i/;
console.log(padrao1.test("Abacaxi"));
console.log(padrao1.test("Abacai"));

const padrao2 = /\d+\w?/;
console.log(padrao2.test("f"));
console.log(padrao2.test("safd1sdaf23fvad"));
console.log(padrao2.test("123"));



console.log("\n\nAula 233 - Operator \"preciso\"");
const cep = /\d{5}-\d{3}/
console.log(cep.test("38413-108"));
console.log(cep.test("88-4"));
console.log(cep.test("38181331"));

console.log("\n\n");
const telefone = /0?\d{2} ?\d{4,5}-?\d{4}/
console.log(telefone.test("34 99905-8051"));
console.log(telefone.test("034 999058051"));
console.log(telefone.test("3499905-8051"));
console.log(telefone.test("034999058051"));



console.log("\n\nAula 235 - Método Match");

const frase = "O numero 1000 está aqui".match(/\d+/);
console.log(frase);



console.log("\n\nAula 236 - Choice pattern");
const frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("bananas"));
console.log(frutas.test("200 laranjas"));
console.log(frutas.test("19 batatas"));



console.log("\n\nAula 237 - Validando um domínio");
let validarDominio = /[www.]?\w+(.com.br|.com)/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.g22oogle.com.br"));
console.log(validarDominio.test("google.com"));



console.log("\n\nAula 238 - Validando um email");
const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("gadg@gmail.com.br"));
console.log(validarEmail.test("gadg@gmailbr"));
console.log(validarEmail.test("gadggmail.com.br"));



console.log("\n\nAula 239 - Validando data de nascimento");
let nascimento = /[0-9]{1,2}[/][0-9]{2}[/][0-9]{4}/;
let nascimento2 = /[1-31]{1,2}[/][1-12]{2}[/][1920-2023]{4}/;

console.log(nascimento.test("17/01/2002"));
console.log(nascimento.test("2002/01/17"));
console.log(nascimento.test("01/17/2002"));