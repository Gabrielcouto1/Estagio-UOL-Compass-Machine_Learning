console.log("\n\nExercicio 15");

let num = 9;
let divisoes = 0;

for(let h = 1; h <= num; h++){
    if(num%h==0)
        divisoes++;
}

if(divisoes==2)
    console.log(num+ " é primo");
else    
    console.log(num+ " nao é primo");