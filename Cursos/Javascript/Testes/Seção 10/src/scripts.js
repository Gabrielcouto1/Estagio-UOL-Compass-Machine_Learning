console.log("Aula 184 - Métodos");
let cachorro={
    latir:function(){
        console.log("Au Au");
    }
};

cachorro.latir()



console.log("\n\nAula 185 - Métodos (+)");
const pessoa={
    nome:"Gabriel",
    idade:21,
    setIdade:function(idade){
        this.idade=idade;
    },
    getIdade:function(){
        return this.idade;
    }
}

console.log(pessoa.idade);
pessoa.setIdade(22);
console.log(pessoa.idade);



console.log("\n\nAula 186 - Prototypes");
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa)==Object.prototype);




console.log("\n\nAula 187 - Prototypes (+)");

const novaPessoa=Object.create(pessoa);
console.log(novaPessoa.nome);



console.log("\n\nAula 188 - Classes");
let gato={
    patas:4,
    raca:'nao definida',
    miar:function(){
        console.log("miau miau miaaaaaau");
    }
}

let gato1=Object.create(gato);

console.log(gato1.patas);
console.log(gato1.raca);

let gato2=Object.create(gato);
gato2.miar();



console.log("\n\nAula 189 - Instanciando classes por função");
function criarGato(raca, patas, cor){
    let gato=Object.create({});
    gato.raca=raca;
    gato.patas=patas;
    gato.cor=cor;
    return gato;
}

gato1=criarGato('persa', 4, 'marrom');
console.log(gato1);




console.log("\n\nAula 190 - Construtores");

function Cachorro(raca, patas, cor) {
    this.raca=raca;
    this.patas=patas;
    this.cor=cor;
}

let husky = new Cachorro('husky', 4, 'branco');
console.log(husky);



console.log("\n\nAula 191 - Método por prototype");
Cachorro.prototype.uivar=function(){
    console.log('auuuuuuuuuu');
}

husky.uivar();




console.log("\n\nAulas 192 e 193 - Construtor na classe (ES6)");
class Cachorro1{
    constructor(raca, /*patas,*/ cor){
        this.raca=raca;
        //this.patas=patas;
        this.cor=cor;
    }

    latir(){
        console.log("auau");
    }
}

//Cachorro.prototype.patas=4;//default

let labrador= new Cachorro1("Labrador", 21, "Amarelo")
console.log(labrador);
let viraLata=new Cachorro1()
console.log(viraLata);



console.log("\n\nAula 194 - Override no prototype");
Cachorro.prototype.raca='Sem raça definida';

console.log(Cachorro.prototype.raca);//default
console.log(labrador.raca);



console.log("\n\nAula 195 - Symbols");
let patas = Symbol();

Cachorro.prototype[patas]=4;

console.log(Cachorro.prototype[patas]);//propriedade imutavel do prototype



console.log("\n\nAula 196 - Getters e setters");

class Carro{
    constructor(marca, modelo, ano, cor){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        this.cor=cor;
    }

    getMarca(){
        return this.marca;
    }

    setMarca(marca){
        this.marca=marca
    }

    getModelo(){
        return this.modelo;
    }

    setModelo(modelo){
        this.modelo=modelo;
    }

    getAno(){
        return this.ano;
    }

    setAno(ano){
        this.ano=ano;
    }

    getCor(){
        return this.cor;
    }

    setCor(cor){
        this.cor=cor;
    }
}

let fiat= new Carro('fiat', 'uno', '1998', 'preto');

fiat.setCor("azul");
console.log(fiat.getCor());



console.log("\n\nAula 197 - Herança");

class Mamifero{
    constructor(patas){
        this.patas=patas;
    }
}

class Coelho extends Mamifero{
    constructor(patas, cor){
        super(patas);
        this.cor=cor;
    }
}

let coelho1=new Coelho(3, "amarelo com preto");

console.log(coelho1);



console.log("\n\nAula 198 - InstanceOf");
console.log(new Coelho instanceof Mamifero);
console.log(fiat instanceof Mamifero);