const express = require('express')
const app = express()
const port = 3000
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

app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});
