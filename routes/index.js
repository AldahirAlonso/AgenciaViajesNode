// Importar express.
import express from 'express';

// Crear un router de express.
const router = express.Router();

// Definir las rutas.
// Ruta de Inicio.
router.get('/', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('inicio')
});

// Ruta de Nosotros.
router.get('/nosotros', (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('nosotros')
});

// Exportar el router.
export default router; // Router sirve para definir las rutas de la aplicación.