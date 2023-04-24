console.log("Aula 96");

function imprimirNoConsole(){
    console.log("Hello World!");
}
imprimirNoConsole();

function imprimeNum(num){
    console.log("numero="+num);
}

for(let i=0;i<11;i++)
    imprimeNum(i);

function multiplicar(a, b, c){
    return a*b*c;
}



console.log("\n\nAula 97");
let a=10,b=9,c=2;

console.log(a+"*"+b+"*"+c+"= "+multiplicar(a,b,c));

function podeDirigir(idade, cnh){
    if(idade>=18&&cnh==true)
        console.log("Pode dirigir!");
    else    
        console.log("Não pode dirigir =(");
}

podeDirigir(18,false);
podeDirigir(19,true);
podeDirigir(4,false);
podeDirigir(100,true);


console.log("\n\nAula 101");

const parOuImpar = (n)=>{
    return n%2;
}

console.log(parOuImpar(2));



console.log("\n\nAula 102");

const raizQuadrada=(x)=>{
    return x*x;
}

const raizQuadrada2=n => n*n;

console.log(raizQuadrada(2));
console.log(raizQuadrada2(4));


console.log("\n\nAula 103");

function nomeComIdade(nome,idade){
    if(idade===undefined)
        console.log("Seu nome é: "+nome);
    else
        console.log("Nome: "+nome+"; Idade: "+idade);
}

nomeComIdade("gabriel Couto");
nomeComIdade("Ana barbara",21);



console.log("\n\nAula 104");
function repetirFrase(frase, n=2){
    for(let x=1;x<=n;x++)
        console.log(frase+" "+n);
}

repetirFrase("Teste",5);
repetirFrase("valor default teste");



console.log("\n\nAula 105");

function lembrarSoma(x){
    return function(y){
        return x+y;
    }
}

let soma1=lembrarSoma(6);

console.log(soma1(5));

function contador(i){
    let cont=i;
    let somarContador=function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuCont = contador(5);

meuCont();
meuCont();
console.log(typeof meuCont);

console.log("\n\nAula 106");

function retornarNumeroPar(n){
    if(n%2==0)
        console.log(n+" é par.");
    else{
        console.log(n);
        retornarNumeroPar(n-1);
    }
}

retornarNumeroPar(32);