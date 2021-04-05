const express = require('express')
const app = express()
const puerto = process.env.PORT
const path = require('path');
console.log('Joaquin probando')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})