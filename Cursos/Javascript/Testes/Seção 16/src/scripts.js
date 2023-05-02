console.log("Aula 271 - Entendendo o DOM");
console.log(document);
console.log(document.body);




console.log("\n\nAula 273 - Acessando elementos e movendo-se através do DOM");
console.log(document.body.childNodes);
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[5].childNodes);
console.log(document.body.childNodes[5].childNodes[3]);
console.log(document.body.childNodes[5].childNodes[3].innerText);



console.log("\n\nAula 275 - Encontrando elementos pela tag");
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1')[0]);
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p')[1])



console.log("\n\nAula 276 - Encontrando elementos pelo ID");
console.log(document.getElementById('link-fim'));
console.log(document.getElementById('titulo-principal'));



console.log("\n\nAula 277 - Encontrando elementos pela classe");
console.log(document.getElementsByClassName('teste'));
console.log(document.getElementsByClassName('teste')[0]);
console.log(document.getElementsByClassName('lista'));



console.log("\n\nAula 278 - Encontrando elementos por query");
console.log(document.querySelector('#segundo-container h1'));
console.log(document.querySelector('#container-principal h1'));
console.log(document.querySelector('div div p'));
console.log(document.querySelector('div ul li'));
console.log(document.querySelector('ul .lista'));
console.log(document.querySelector('footer h2'));



console.log("\n\nAula 280 - Alterando a DOM com insertBefore");

// let novoElemento = document.createElement('p');
// let texto = document.createTextNode("Algum texto adicional após script");

// novoElemento.appendChild(texto);

// let elementoAlvo = document.querySelector('#titulo-principal');
// let elementoPai = document.querySelector('#container-principal');

// elementoPai.insertBefore(novoElemento,elementoAlvo);



console.log("\n\nAula 281 - Alterando a DOM com appendChild");
// let novoElemento = document.createElement('p');
// let texto = document.createTextNode("Algum texto adicional após script");

// novoElemento.appendChild(texto);

// let p = document.querySelector("#paragrafo-principal");
// let pai = p.parentNode;

// pai.appendChild(novoElemento);




console.log("\n\nAula 282 - Alterando a DOM com replaceChild");
// let novoElemento = document.createElement('p');
// let texto = document.createTextNode("Algum texto adicional após script");

// novoElemento.appendChild(texto);

// let heading = document.querySelector('#titulo-principal');
// let paiHeading = heading.parentNode;

// paiHeading.replaceChild(novoElemento,heading);



console.log("\n\nAula 283 - Criando nós de texto");

// let pSemText = document.getElementById("sem-texto");

// let texto=document.createTextNode("Texto inserido agora");

// pSemText.appendChild(texto);



console.log("\n\nAula 284 - Criando nós de elementos");

// let lista = document.createElement('ul');

// for(let i=1;i<=5;i++){
//     let item = document.createElement('li');
//     let texto = document.createTextNode(`texto ${i}`);

//     item.appendChild(texto);
//     lista.appendChild(item);
// }

// let container = document.getElementById("container-principal");

// container.appendChild(lista)



console.log("\n\nAula 285 - Modificando e lendos atributos");

let url = document.getElementById("link-fim");
console.log(url.getAttribute('href'));

url.setAttribute("href", "https://www.google.com.br");



console.log("\n\nAula 286 - Largura e altura do elemento");
let teste=document.getElementById('titulo-principal');

console.log(teste.offsetHeight);
console.log(teste.offsetWidth);

console.log(teste.clientHeight);//nao considera bordas
console.log(teste.clientWidth);



console.log("\n\nAula 287 - Posição do elemento na tela");
console.log(teste.getBoundingClientRect());




console.log("\n\nAula 288 - Editando o CSS com JS");
let p = document.getElementById('paragrafo-principal');

console.log(p.style);
p.style.color='red'



console.log("\n\nAula 289 - Selecionando vários elementos com query");

let todosPs = document.querySelectorAll('p');
console.log(todosPs);
console.log(todosPs.length);