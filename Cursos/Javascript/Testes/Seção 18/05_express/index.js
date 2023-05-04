let express=require("express");
let app=express();

app.get('/',function(req,res) {
    res.send('Testando com postman');
});

app.listen(3000,function() {
    console.log("A app está listening a porta 3000!");
});