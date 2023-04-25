console.log("Exercicio 1");
let arr1=[1,2,3,4,5,6];

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr1[3]);



console.log("\n\nExercicio 2");
arr1=[1,2];
let arr2=['a','b','c','d'];

console.log(arr1.length);
console.log(arr2.length);



console.log("\n\nExercicio 3");

let onibus={
    rodas:8,
    passageiros:40,
    portas:2
};

console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

console.log("\n\nExercicio 4");
onibus.janela=20;
delete onibus.rodas;

console.log(onibus.janela);
console.log(onibus);



console.log("\n\nExercicio 5");
let nomes=["Gabriel", "Ana Bárbara", 'Isabela', 'Guilherme', 'Victor Hugo'];

if(nomes.includes("Gabriel"))
    nomes.forEach(nome=>{
        console.log(nome);
    })



console.log("\n\nExercicio 6");

function verificaTamanho(array) {
    if(array.length<5)
        console.log("Poucos elementos");
    else
        console.log("Muitos elementos");
}

verificaTamanho(nomes);
verificaTamanho([1,2,3,4]);



console.log("\n\nExercicio 7");
for(let i=0; i<nomes.length; i++)
    console.log(nomes[i].toUpperCase());



console.log("\n\nExercicio 8");
let config={
    "tamanho_tela":"Grande",
    "volume":68,
    "pagina_inicial":"google"
};

let JSONconfig=config;

console.log(JSONconfig);



console.log("\n\nExercicio 9");
let frase="O rato roeu a roupa do rei de roma";

let palavras=frase.split(" ");

for(let i=0;i<palavras.length;i++)
    console.log(palavras[i]);



console.log("\n\nExercicio 10");
let calculadora={
    soma:function(a,b){
        return a+b;
    },
    subtrair:function(a,b){
        return a-b;
    },
    multiplicar:function(a,b){
        return a*b;
    },
    dividir:function(a,b){
        return a/b;
    },
}

console.log(calculadora.soma(5,4));
console.log(calculadora.subtrair(9,4));
console.log(calculadora.multiplicar(2,2));
console.log(calculadora.dividir(1,4));