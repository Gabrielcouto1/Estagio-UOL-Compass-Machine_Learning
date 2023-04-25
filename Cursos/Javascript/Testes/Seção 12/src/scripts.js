//"use strict" //deve ser declarado no começo do escopo onde deseja ativar o strict mode

console.log("Aula 214 - Strict mode");

opa='teste';
delete Object.prototype;



console.log("\n\nAula 218 - Exceptions");

let a=2;
if(a!=2)
    throw new Error("O valor de a não pode ser 1");

function saudacoes(nome) {
    if(typeof(nome)!="string")
        throw new Error("Digite um nome válido (string).")
    console.log("Olá "+nome);
}

saudacoes("Gabriel");
//saudacoes(Infinity);



console.log("\n\nAula 219 - Try e catch");
let b=2
try{
    let c=3+b;
}catch(erro){
    console.log(erro);
}



console.log("\n\nAula 220 - Finally");

try{
    let c=3+d;
}catch(erro){
    console.log(erro);
}finally{
    console.log("Executou");
}



console.log("\n\nAula 221 - Assertion");
let arr=[1,2,3,4,5];
let arr2=[];

function printArray(arr){
    if(arr.length==0)
        throw new Error("O array não pode ser vazio");
    else
        arr.forEach(elem => {
            console.log(elem);
        });
}

printArray(arr);
printArray(arr2);