console.log("Exercicio 1");
class Conta{
    constructor(saldo){
        this.saldo=saldo;
    }

    deposito(valor){
        this.saldo+=valor;
    }

    saque(valor){
        if(this.saldo<valor)
            console.log("Nao é possivel sacar");
        else
            this.saldo-=valor;
    }
}

let minhaconta=new Conta(500);

minhaconta.deposito(1000);
console.log(minhaconta.saldo);
minhaconta.saque(2000);
console.log(minhaconta.saldo);
minhaconta.saque(1400);
console.log(minhaconta.saldo);



console.log("\n\nExercicio 2");
class Carrinho{
    constructor(itens, valor_total){
        this.itens=itens;
        this.qtd_total=itens.length;
        this.valor_total=valor_total;
    }

    addItem(item,valor){
        this.itens= this.itens.push(item);
        this.qtd_total++;
        this.valor_total+=valor;
    }

    removeItem(item,valor){
        if(this.itens.includes(item)){
            delete this.itens[this.itens.indexOf(item)];
            this.valor_total-=valor;
        }
        else
            console.log("Nao existe o item no carrinho");
    }
}

let meuCarrinho = new Carrinho(['Item1', 'fone', 'casa'], 1000);

meuCarrinho.addItem('carro', 9000);
console.log(meuCarrinho);



console.log("\n\nExercicio 3");
class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua=rua;
        this.bairro=bairro;
        this.cidade=cidade;
        this.estado=estado;
    }

    setRua(rua){
        this.rua=rua;
    }

    setBairro(bairro){
        this.bairro=bairro;
    }

    setCidade(cidade){
        this.cidade=cidade;
    }

    setEstado(estado){
        this.estado=estado;
    }
}

let meuEndereco=new Endereco('av imbaubas', 'planalto', 'uberlandia', 'mg');
console.log(meuEndereco);

meuEndereco.setRua('rua dos pequis');
meuEndereco.setBairro('bocaina');
meuEndereco.setCidade('araxa');
meuEndereco.setEstado('Minas');

console.log(meuEndereco);



console.log("\n\nExercicio 4");
class Carro{
    constructor(marca, cor, gasolina_restante){
        this.marca=marca;
        this.cor=cor;
        this.gasolina_restante=gasolina_restante;
    }

    dirigir(){
        let gasolina_inicial=this.gasolina_restante;
        while(1){
            if(this.gasolina_restante==0){
                console.log("Nao tem mais gasolina");  
                break;
            }
            this.gasolina_restante-=0.5;
            console.log(this.gasolina_restante);
            if(this.gasolina_restante==(gasolina_inicial/2))
                break;
        }
        console.log("Voce parou de dirigir");
    }
    abastecer(qtd_combustivel){
        this.gasolina_restante+=qtd_combustivel;
    }
}

let meuCarro=new Carro('fiat', 'adf', 100);

meuCarro.dirigir();
console.log(meuCarro.gasolina_restante);
meuCarro.abastecer(10);
console.log(meuCarro.gasolina_restante);