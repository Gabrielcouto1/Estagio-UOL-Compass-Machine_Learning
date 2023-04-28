console.log("Aula 255 - Callbacks");
// console.log("Ainda não chamou o callback");

//setTimeout(() => {
//    console.log("Chamou o callback");
//}, 2000);

// console.log("Ainda não chamou o callback");



console.log("\n\nAula 256 - Promises");

// let p= Promise.resolve(5);
// console.log("Outros códigos");

// console.log(p);

// p.then((value)=> {return value+5})
//  .then((value)=> {return value +5})
//  .then((value)=> {console.log(value)});



console.log("\n\nAula 257 - Falha nas Promises");

// var p1 = new Promise(function(resolve, reject) {
//     resolve('Teste');
//   });
   
// p1.then(function(value) {
//     if(true) {
//         throw 'Erro encontrado!';
//     }
//   }).catch(function(e) {
//     console.log(e);
//   })

//   console.log("dlkjadslkjf");



console.log("\n\nAula 258 - Reject promises");

// function verificaNum(num) {
//   return new Promise((resolve, reject)=>{
//     if(num==2){
//       resolve(console.log("O num é "+num));
//     }else
//       reject(new Error("Falhou"));
//   });
// }



console.log("\n\nAula 259 - Resolvendo várias Promises");
// const p1 = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     resolve(10);
//   }, 5000);
// });

// const p2 = Promise.resolve(5);

// const p3=new Promise((resolve,reject)=>{
//   resolve(10);
// });

// Promise.all([p1,p2,p3]).then((values)=>console.log(values));



console.log("\n\nAula 260 - Funções assíncronas");
// async function somar(a,b) {
//   return a+b;
// }

// somar(2,5).then(value=>console.log(value));



console.log("\n\nAula 261 - Await");
// function somaComDelay(a,b) {
//   return new Promise(resolve=>{
//     setTimeout(() => {
//       resolve(a+b)
//     }, 4000);
//   })
// }

// async function resSoma(a,b,c) {
//   let x=somaComDelay(a,b);
//   let y=c;

//   return await x + y;
// }

// console.log(resSoma(1,2,3).then(value=>console.log(value)));



console.log("\n\nAula 262 - Generators");
function* criadorID(){
  let id=0;
  while(true){
    yield id++;
  }
}

let criaId=criadorID();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);