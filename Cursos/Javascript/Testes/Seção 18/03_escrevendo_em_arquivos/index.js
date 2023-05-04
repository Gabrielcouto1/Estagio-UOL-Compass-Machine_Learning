let { readFile, writeFile } = require("fs");
 

writeFile('arquivo.txt', "Texto por writeFile()",(error)=>{
    if(error)
      console.log(error);
    else
      console.log('escreveu no arquivo');
})

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) 
    throw error;
  else 
    console.log(texto);
});