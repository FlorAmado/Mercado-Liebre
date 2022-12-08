const express = require('express');
const app= express();
const path= require('path');
const port = 3030;


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

