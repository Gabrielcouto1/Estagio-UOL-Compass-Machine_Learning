console.log("\n\nAulas 59 a 62: Laços de repetição");

let x=10
while(x>0){
    console.log("x="+x);
    x--;
}

x=100;
do {
    console.log(x/2);
    x=x-5;
}while(x>=0);

for(let i = 0; i<101; i++){
    console.log(i);
}

let y=0;

while(y<11){
    y++;
    if(y%2==0)
        continue;
    console.log(y);
    y++;
}

