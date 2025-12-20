// Importar express.
import express from 'express';

// Importar el controlador de páginas para la página de inicio.
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

// Crear un router de express.
const router = express.Router();

// Definir las rutas.
// Una ruta es una URL que el usuario puede visitar en el navegador.
// Ruta de Inicio.
// Pasamos la ruta '/' al controlador paginaInicio para ordenar la estructura del código.
router.get('/', paginaInicio); // Usamos el controlador importado para manejar la solicitud.

// Ruta de Nosotros.
// Pasamos la ruta '/nosotros' al controlador paginaNosotros para ordenar la estructura del código.
router.get('/nosotros', paginaNosotros); // Usamos el controlador importado para manejar la solicitud.

// Ruta de Viajes.
// Pasamos la ruta '/viajes' al controlador paginaViajes para ordenar la estructura del código.
router.get('/viajes', paginaViajes); // Usamos el controlador importado para manejar la solicitud.

router.get('/viajes/:slug', paginaDetalleViaje); // Usamos el controlador importado para manejar la solicitud.

// Ruta de Testimoniales.
// Pasamos la ruta '/testimoniales' al controlador paginaTestimoniales para ordenar la estructura del código.
router.get('/testimoniales', paginaTestimoniales); // Usamos el controlador importado para manejar la solicitud.
router.post('/testimoniales', guardarTestimonial); // Usamos el controlador de testimonialController para mandar los datos del formulario.

// Exportar el router.
export default router; // Router sirve para definir las rutas de la aplicación.