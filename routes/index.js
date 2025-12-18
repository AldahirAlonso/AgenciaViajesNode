// Importar express.
import express from 'express';

// Crear un router de express.
const router = express.Router();

// Definir las rutas.
// Una ruta es una URL que el usuario puede visitar en el navegador.
// Ruta de Inicio.
router.get('/', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('inicio', { // Render sirve para renderizar una vista PUG.
        pagina: 'Inicio' // Creamos la variable 'pagina' para pasar a la vista PUG.
    })
});

// Ruta de Nosotros.
router.get('/nosotros', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('nosotros', { // Render sirve para renderizar una vista PUG.
        pagina: 'Nosotros' // Creamos la variable 'pagina' para pasar a la vista PUG.
    })
});

// Ruta de Viajes.
router.get('/viajes', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('viajes', { // Render sirve para renderizar una vista PUG.
        pagina: 'Viajes' // Creamos la variable 'pagina' para pasar a la vista PUG.
    })
});

// Ruta de Testimoniales.
router.get('/testimoniales', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('testimoniales', { // Render sirve para renderizar una vista PUG.
        pagina: 'Testimoniales' // Creamos la variable 'pagina' para pasar a la vista PUG.
    })
});

// Exportar el router.
export default router; // Router sirve para definir las rutas de la aplicación.