console.log("Exercicio 1");
const ex1 = /[A-Z]/

console.log(ex1.test("asdjf"));
console.log(ex1.test("LAFKSFAKL"));



console.log("\n\nExercicio 2");
const ex2 = /\w+ID/;

console.log(ex2.test("alsdkfjalID"));
console.log(ex2.test("alsdkfjalDI"));
console.log(ex2.test("12314ID"));
console.log(ex2.test("IDoasasdf"));



console.log("\n\nExercicio 3");
const ex3 = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(ex3.test("Marca: Nike"));
console.log(ex3.test("Marca: Adidas"));
console.log(ex3.test("Marca: Puma"));
console.log(ex3.test("Marca: Asics"));
console.log(ex3.test("Marca: nike"));
console.log(ex3.test("Marca: 12fads"));



console.log("\n\nExercicio 4");
const ex4 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ex4.test("123.1.1.1"));
console.log(ex4.test("123.11.1"));
console.log(ex4.test("13a.1.1.1"));
console.log(ex4.test("1.1.1.1"));



console.log("\n\nExercicio 5");
const ex5 = /^(?=.{3,16}$)[A-Za-z0-9-_]/;  //^(?=.{3,16}$) ->serve para delimitar o tamanho, de 3 a 16 

console.log(ex5.test("as"));
console.log(ex5.test("11111111"));
console.log(ex5.test("Couto_aranha-0"));