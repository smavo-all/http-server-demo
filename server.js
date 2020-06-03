const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    let salida = {
        
        nombre: 'Sergio',
        gitlab: 'https://gitlab.com/smavo',
    }
    res.send(salida);
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});