// Importar express.
import express from 'express';
import router from './routes/index.js'; // Importar router para las rutas definidas.x

// Crear una aplicación de express.
const app = express();

// Definir el puerto.
const port = process.env.PORT || 4000;

// Habilitar PUG.
app.set('view engine', 'pug'); // Establecer el motor de plantillas PUG.

// Obtener el año actual para pasarlo a las vistas.
app.use( (req, res, next) => { // Middleware para obtener el año actual.
//res.locals.unaVariable = 'Una Nueva Variable'; // Variable disponible en todas las vistas PUG. 
                                                // locals es un objeto que contiene variables disponibles para la vista.
//console.log(res.locals) // Ver las variables locales disponibles en la respuesta (en este caso, 'unaVariable').
    const year = new Date(); // Date es una clase de JavaScript para manejar fechas.
    res.locals.actualYear = year.getFullYear(); // getFullYear() obtiene el año completo (4 dígitos).
    res.locals.nombreSitio = "Agencia de Viajes"; // Otra variable local para el nombre del sitio.
    next(); // Pasar al siguiente middleware o ruta.
});

// Definir la carpeta publica.
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public' por defecto.

// Agregar el router a la aplicación.
app.use('/', router); // Todas las rutas definidas en el router estarán bajo la ruta '/'.

// Iniciar el servidor en el puerto definido con un Callback.
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})