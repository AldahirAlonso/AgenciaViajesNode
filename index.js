// Importar express.
import express from 'express';
import router from './routes/index.js'; // Importar router para las rutas definidas.x

// Crear una aplicación de express.
const app = express();

// Definir el puerto.
const port = process.env.PORT || 4000;

// Habilitar PUG.
app.set('view engine', 'pug'); // Establecer el motor de plantillas PUG.

// Agregar el router a la aplicación.
app.use('/', router); // Todas las rutas definidas en el router estarán bajo la ruta '/'.

// Iniciar el servidor en el puerto definido con un Callback.
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})