console.log("Aula 131- Arrays");

let arr=[1,2,3,4,5];
let nomes=["Gabriel", "Ana Bárbara", "Isabela"];
let bool=[true, false, false , false];
let misturado=["Gabriel", false, 21];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);



console.log("\n\nAula 132- Mais arrays");

console.log(arr[2]);
console.log(nomes[1]);
console.log(bool[0]);
console.log(misturado[misturado.length-1]);



console.log("\n\nAula 133- Propriedades");

let nome="João";

console.log(nome.length);

console.log(arr.length);
console.log(arr[2]);


console.log("\n\nAula 134- Métodos");
let marca="nike";

console.log(marca.toUpperCase());
console.log(typeof marca.toUpperCase)


console.log("\n\nAula 135- Objetos");

let cachorro={
    patas: 4,
    nome:"Shark"
};

console.log(cachorro.patas);
console.log(cachorro.nome);



console.log("\n\nAula 136- Criando e deletando propriedades");

let pessoa={
    nome:"Matheus",
    idade: 29,
    profissao: "Programador"
};

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);

console.log(pessoa);
pessoa.casado=false;
console.log(pessoa.casado);
console.log(pessoa);



console.log("\n\nAula 137- Copiando propriedades de um objeto");

let carro={
    portas:2,
    portamalas:"200L",
    motor:"2.0"
};

let adicionais={
    tetosolar:true,
    arcondicionado:true
};

console.log(carro);

Object.assign(carro,adicionais);

console.log(carro);



console.log("\n\nAula 138- Chaves de um objeto");

let obj={
    chave1:1,
    chave2:2,
    chave3:3,
    chave4:4
};

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.keys(carro));



console.log("\n\nAula 139 - Mutação");

let pessoa1={
    nome:"Gabriel"
};

let pessoa2=pessoa1;

let pessoa3={
    nome:"Gabriel"
};

console.log(pessoa1==pessoa2);
console.log(pessoa3==pessoa1);
console.log(pessoa3==pessoa2);

pessoa2.nome="Pedro";
console.log(pessoa1);

pessoa1.nome="Maria";
console.log(pessoa2);



console.log("\n\nAula 141 - Push e pop em Arrays");
let pessoas=["Gabriel", "Ana Bárbara", "Isabela", "Guilherme", "Victor Hugo"];

let pessoaRemovida= pessoas.pop();
console.log(pessoas);
console.log(pessoaRemovida);

pessoas.push("Gabriel Couto");
console.log(pessoas);



console.log("\n\nAula 142 - Shift e Unshift");
let carros=["BMW", "Audi", "VW", "Fiat"];

let removePrimeiroCarro = carros.shift();
console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift("Onix");

console.log(carros);



console.log("\n\nAula 143 - indexOf e lastIndexOf");

arr=[5,6,2,4,9,6,2];

console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));



console.log("\n\nAula 144 - Slice");

arr=[0,1,2,3,4,5];

console.log(arr.slice(2,3));
console.log(arr.slice(3));

console.log(arr.slice(-2));
console.log(arr.slice(1,-2));



console.log("\n\nAula 145 - forEach");
nomes=["Gabriel", "Ana Bárbara", "Isabela", "Guilherme", "Victor Hugo"];

nomes.forEach(nome=>{
    console.log("O nome é: "+ nome);
});



console.log("\n\nAula 146 - Includes");
console.log(nomes.includes("Gabriel"));
console.log(nomes.includes("Isabela"));
console.log(nomes.includes("Tiago"));



console.log("\n\nAula 147 - Reverse");
console.log(nomes.reverse());
console.log(arr.reverse());



console.log("\n\nAula 148 - Trim");

let texto="  alkdsjfa adlkjf asdkjf\n  ";
console.log(texto);

console.log(texto.trim()+" alkdsjflaaaaaaaa");



console.log("\n\nAula 149 - padStart");
let milAoContrario='1';

console.log(milAoContrario.padStart(4,'0'));


console.log("\n\nAula 150 - Split");

let frase = "O rato roeu a roupa do rei de roma";

let palavras=frase.split(" ");//separador que deseja splitar

console.log(palavras);



console.log("\n\nAula 151 - Join");

let fraseMontada = palavras.join("->");

console.log(fraseMontada);



console.log("\n\nAula 152 - repeat");
let string1="teste ";
console.log(string1.repeat(5));



console.log("\n\nAula 153 - rest");

function imprimirNumeros(...num) {
    for(let i = 0; i<num.length;i++)
        console.log(num[i]);
}

imprimirNumeros(1,2,3,4,1,2,3,4,1,5,5,1,1,2,1);



console.log("\n\nAula 154 - Destructuring com objetos");

const person = {
    name:'John',
    lastname: 'Doe'
};

const {name:fname, lastname:lname} = person;

console.log(fname);
console.log(lname);



console.log("\n\nAula 155 - Destructuring com arrays");

let [nomeA, nomeB, nomeC, nomeD, nomeE]=nomes;
console.log(nomes);
console.log(nomeA);
console.log(nomeB);
console.log(nomeC);
console.log(nomeD);
console.log(nomeE);



console.log("\n\nAula 156 - JSON");
let pessoaJSON={
    "nome":"Gabriel",
    "nome_meio":"Couto",
    "idade":21
};

console.log(pessoaJSON.nome);
console.log(pessoaJSON.nome_meio);
console.log(pessoaJSON.idade);



console.log("\n\nAula 157 - JSON para string");
const car={
    "brand":"BMW",
    "wheels":4,
    "doors":2,
    "type":"sedan"
};

let jsonToString = JSON.stringify(car);
console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);