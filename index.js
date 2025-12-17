// Importar express.
const express = require('express');

// Crear una aplicación de express.
const app = express();

// Definir el puerto.
const port = process.env.PORT || 4000;

// Iniciar el servidor en el puerto definido con un Callback.
app.listen(() => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})