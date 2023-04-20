console.log("\n\nExercicio 11");

let idade1 = 19;
let CNH = true;

if(idade1>18&&CNH==false)
    console.log("Maior mas não tem carteira");
else if(idade1>18&&CNH==true)
    console.log("Pode dirigir!");
else    
    console.log("Menor de idade nao pode dirigir");