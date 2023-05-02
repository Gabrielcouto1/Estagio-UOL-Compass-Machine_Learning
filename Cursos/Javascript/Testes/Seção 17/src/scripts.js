console.log("Aula 293 - Criando eventos");

let btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click',()=>{
//     console.log('clicou em mim!');
// });



console.log('\n\nAula 294 - Removendo eventos');
let btn2=document.querySelector("#btn2");

// function msg() {
//     console.log("Clicou em mim!");
// }

// btn1.addEventListener("click", msg);
// btn2.addEventListener("click",function () {
//     btn1.removeEventListener("click",msg);
// })


console.log("\n\nAula 295 - Objeto do evento");

// function msg(e) {
//     console.log(e);
// }

// btn1.addEventListener("click",msg);
// btn2.addEventListener('click',function(event){
//     console.log(event);
// });



console.log("\n\nAula 296 - Propagação");
let p = document.querySelector('p');

// function msg(e) {
//     console.log(e);
//     e.stopPropagation();
// }

// p.addEventListener('click',msg);

// btn1.addEventListener('click',msg);



console.log("\n\nAula 297 - Previnir ações default");
let a = document.querySelector("a");

// a.addEventListener('click',function(e) {
//     e.preventDefault();
//     console.log('Nao muda de link mais');
// });



console.log("\n\nAula 298 - Key event");
window.addEventListener('keydown',function(e) {
    if (e.key=='q') {
        console.log("Reiniciando a página");
        setTimeout(() => {
            this.location.reload();
        }, 4000);
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key=='Enter') {
        console.log('soltou a tecla');
    }
})



console.log("\n\nAula 299 - Outros eventos de mouse");
// btn1.addEventListener('mousedown', function(e) {
//     console.log('apertou o botao');
// })

// btn1.addEventListener('mouseup', function(e) {
//     console.log('soltou o botao');
// })

// btn2.addEventListener('dblclick',function() {
//     console.log("clique duplo");
// });

// btn2.addEventListener('contextmenu',function(e) {
//     e.preventDefault();
//     console.log("botao direito");
// });



console.log("\n\nAula 300 - Movimento do mouse");
// window.addEventListener('mousemove',function(e) {
//     console.log(e.x);
//     console.log(e.y);
// })



console.log("\n\nAula 301 - Scroll");

window.addEventListener('scroll', function(e) {
    if (this.window.pageYOffset>1000) {
        console.log('chegou na posicao');
    }
});



console.log("\n\nAula 302 - Evento de foco");
let input = document.querySelector('input');

input.addEventListener('focus',function () {
    console.log('entrou no input');
});

input.addEventListener('blur',function() {
    console.log('saiu do input');
});



console.log("\n\nAula 303 - Eventos de page load");
// window.addEventListener('load', function() {
//     this.alert("Assine nossos termos de uso!")
// });

// window.addEventListener('beforeunload', function (e) {
//     event.returnValue=null;
// })



console.log("\n\nAula 304 - Debounce");
let timeout;
window.addEventListener('mousemove', function(e) {
    this.clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('x='+e.x);
        console.log('y='+e.y);
    }, 500);
});