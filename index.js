const http = require('http');

//Création du serveur elle peut prendre une fonction en paramètre 
//qui va nous indiquer comment traiter les requêtes
const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain')
    res.end("<h1>hello world</h1>")
});

//Démarer le serveur
server.listen(3050,'127.0.0.1',()=>{
    console.log("hello")
})

