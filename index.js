const express = require('express')
const app = express()
const path=require('node:path')

//incluir archivos estaticos


app.use(express.static('asset/'))


//ruta para html

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/vistas/index.html'));
})

//Puerto donde se escuchara la aplicacion

app.listen(3000, function(){
    console.log("servidor escuchando puerto 3000")
});
